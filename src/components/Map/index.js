import Divider from '@comps/Divider'
import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from '@material-ui/core'
import DEFAULT_LOCATION from 'HARD-DATA/DEFAULT_LOCATION'
import { useEffect } from 'react'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const headerHeight = 50
const useStyles = makeStyles((theme) => ({
  mapPage: {
    display: 'flex',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    height: headerHeight,
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  filterItem: {
    margin: theme.spacing(1, 0),
  },
  sideList: {
    marginTop: headerHeight,
    minWidth: 250,
    maxHeight: '600px',
    overflow: 'auto',
  },
  talent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.ligth,
    },
  },

  contact: { textAlign: 'end' },
  map: {
    marginTop: headerHeight,
  },
}))

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const markStyles = `
color: #000;
padding: 8px;
`
export default function Map({ talents }) {
  const classes = useStyles()

  const talentsWithValidLocation = talents?.filter(
    (talent) => talent?.location?.length === 2
  )
  const talentsWithOutValidLocation = talents?.filter(
    (talent) => talent?.location?.length !== 2
  )
  console.log(talentsWithValidLocation)
  useEffect(() => {
    var map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: DEFAULT_LOCATION,
      zoom: 5,
    })
    map.on('load', () => {
      talentsWithValidLocation.map((talent) => {
        const mark = `<div  style='${markStyles}'>${`${talent.name[0]} ${talent.name[3]}`}</div>`

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: 'marker', // in global classes
        })
          .setLngLat(talent.location)
          .setHTML(mark)
          .addTo(map)
      })
    })
  }, [talentsWithValidLocation.length])

  const handleChangeFilter = (filter) => {
    console.log('change filter', filter)
  }

  return (
    <div className={classes.mapPage}>
      {/* Map Header */}
      <Typography className={classes.header} variant="caption">
        <Box className={classes.filterItem}>{`Show only : `}</Box>
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={false}
              onChange={() => handleChangeFilter('alphas')}
              name="aplhas"
            />
          }
          label="Alphas"
        />
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={true}
              onChange={() => handleChangeFilter('orders')}
              name="orders "
            />
          }
          label="Job Orders "
        />
        <FormControlLabel
          className={classes.filterItem}
          control={
            <Checkbox
              checked={false}
              onChange={() => handleChangeFilter('companies')}
              name="companies"
            />
          }
          label="Comapnies"
        />
      </Typography>
      {/* Side List of Options */}
      <div className={classes.sideList}>
        {talentsWithValidLocation.map((talent) => (
          <Typography
            key={talent._id}
            className={classes.talent}
            component="div"
            variant="caption"
          >
            <div className={classes.info}>
              <Box fontWeight={600}>{talent?.name}</Box>
              <div>Name Company</div>
              <div>Rubro</div>
            </div>
            <div className={classes.contact}>
              <div>Adress</div>
              <div>ZIP</div>
              <div>Contact</div>
            </div>
          </Typography>
        ))}
        <Box display="flex" justifyContent="space-evenly">
          {`Without location `}
          <Divider orientation="horizontal" width="60px" />
        </Box>
        {talentsWithOutValidLocation.map((talent) => (
          <Typography
            key={talent._id}
            className={classes.talent}
            component="div"
            variant="caption"
          >
            <div className={classes.info}>
              <Box fontWeight={600}>{talent?.name}</Box>
              <div>Name Company</div>
              <div>Rubro</div>
            </div>
            <div className={classes.contact}>
              <div>Adress</div>
              <div>ZIP</div>
              <div>Contact</div>
            </div>
          </Typography>
        ))}
      </div>
      {/* MAP */}
      <div
        className={classes.map}
        style={{ width: '90%', height: 700, border: '1px solid' }}
        id="map-container"
      ></div>
    </div>
  )
}

const MARK = <div>hola</div>
