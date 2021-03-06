import { makeStyles } from '@material-ui/core'
import theme from '@src/theme'
import DEFAULT_LOCATION from 'HARD-DATA/DEFAULT_LOCATION'
import { useEffect } from 'react'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const headerHeight = 50
const useStyles = makeStyles((theme) => ({
  root: {},
  map: {
    marginTop: headerHeight,
    margin: '0 auto',
  },
}))

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

export default function Map({
  markers = [],
  talentSelectedLocation = null,
  handleSelectTalent,
}) {
  console.log(talentSelectedLocation)
  const classes = useStyles()
  const talentsInitals = (name = '') => {
    const spilted = name.split(' ')
    const word1 = spilted[0][0]
    const word2 = spilted[1]?.[0] || spilted[0][1]
    return `${word1?.toUpperCase() || 'A'} ${word2?.toUpperCase() || 'B'}`
  }
  const talentsDescription = (name = '') => {
    console.log(name)

    return name?.toLowerCase() || 'no name'
  }
  useEffect(() => {
    var map = new mapboxgl.Map({
      container: 'list-talent-map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: talentSelectedLocation || DEFAULT_LOCATION,
      zoom: 9,
    })
    map.on('load', () => {
      markers.map((talent) => {
        /* ---------------------------- */
        /* ----Create custom marker---- */
        /* ---------------------------- */
        const defaultMarker = document.createElement('div')
        /* ---------------------------- */
        /* ----Asign a global class ---- */
        /* ---------------------------- */
        defaultMarker.className = 'mapbox-custom-marker'
        defaultMarker.style.backgroundColor = theme.palette.background.default
        defaultMarker.innerHTML = `${talentsInitals(talent.name)}`
        /* ----------------------------------------- */
        /* ----Listeners for to change inner Text ---- */
        /* ----------------------------------------- */
        defaultMarker.addEventListener('mouseenter', function () {
          // handleSelectTalent(talent.location)
          defaultMarker.innerHTML = `${talentsDescription(talent.name)}`
          defaultMarker.style.backgroundColor = theme.palette.primary.main
        })
        defaultMarker.addEventListener('mouseout', function () {
          console.log('sali')
          defaultMarker.innerHTML = `${talentsInitals(talent.name)}`
          defaultMarker.style.backgroundColor = theme.palette.background.default
        })

        let mark = new mapboxgl.Marker(defaultMarker)
          .setLngLat(talent.location)
          .addTo(map)
      })
    })
  }, [markers.length, talentSelectedLocation])

  return (
    <div
      className={classes.map}
      style={{ width: '90%', height: '70vh', border: '1px solid' }}
      id="list-talent-map-container"
    ></div>
  )
}
