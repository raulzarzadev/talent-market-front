import { useEffect } from 'react'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

export default function Map() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiemFzYXJhIiwiYSI6ImNrbjRzb2o2dDF1Z2syb21udW0zMmduNjgifQ.7j_DEriOu_NtwcZlpXlCFw'

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
    })
  }, [])
  return (
    <div>
      <h1>Map</h1>
      <div
        style={{ width: 200, height: 200, border: '1px solid' }}
        id="map-container"
      ></div>
    </div>
  )
}
