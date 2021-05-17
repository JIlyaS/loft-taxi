import React, { PureComponent } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

class Map extends PureComponent {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [55.099594, 51.776272],
      zoom: 12
      });
  }

  componentWillUnmount() {
    this.map.remove();
  }
  
  render() {
    return (
      <div className="map">
        <div className="map__component" data-testId="map" ref={el => this.mapContainer = el} />
      </div>
    );
  }
}

export default Map;

export {Map};
