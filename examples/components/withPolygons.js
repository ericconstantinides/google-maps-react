import React from 'react'
import ReactDOM from 'react-dom'

import Map, { GoogleApiWrapper } from '../../src/index'
import Polygon from '../../src/components/Polygon'

const WithPolygons = React.createClass({
  render: function () {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const polygon = [
      { lat: 37.789411, lng: -122.422116 },
      { lat: 37.785757, lng: -122.421333 },
      { lat: 37.789352, lng: -122.415346 }
    ]

    return (
      <Map
        google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={14}
      >
        <Polygon
          paths={[polygon]}
          strokeColor='#0000FF'
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor='#0000FF'
          fillOpacity={0.35}
        />
      </Map>
    )
  }
})

export default WithPolygons
