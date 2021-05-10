import React, { PureComponent } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

class Map extends PureComponent {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamlseWFzIiwiYSI6ImNrYTJxcGw2NTBjdGYza3Awdmx3YXlnemgifQ.zg5oZ5IIeUoLMIrx0LD_mw';
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
        <div data-testid="map" className="map__component" ref={el => this.mapContainer = el} />
      </div>
    );
  }
}

export default Map;

export {Map};
