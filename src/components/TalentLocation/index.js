import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { makeStyles } from '@material-ui/core'
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
const useStyles = makeStyles((theme) => ({}))
export default function TalentLocation({ location, handleSetLocation }) {
  const classes = useStyles()
  const mapContainer = useRef()
  let centermarker
  let defaultMarker

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: location,
      zoom: 5,
    })

    map.on('load', (e) => {
      defaultMarker = new mapboxgl.Marker().setLngLat(location).addTo(map)
    })

    map.on('movestart', (e) => {
      centermarker?.remove()
      defaultMarker?.remove()
    })

    map.on('moveend', (e) => {
      const center = map.getCenter()
      const newMarker = new mapboxgl.Marker().setLngLat(center).addTo(map)
      handleSetLocation([center.lng, center.lat])
      centermarker = newMarker
    })

    return () => map.remove()
  }, [location])

  return (
    <div
      id="talent-map-container"
      style={{ width: '100%', height: '200px' }}
      className={classes.map}
      ref={mapContainer}
    />
  )
}
