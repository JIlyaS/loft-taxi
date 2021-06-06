import React, { PureComponent } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import { drawRoute } from '../../utils/map';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';
import { getRoute } from '../../modules/route/selectors';

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

  componentDidUpdate() {
    const { route } = this.props;
    if (route.length) {
      drawRoute(this.map, route);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }
  
  render() {
    return (
      <div className="map">
        <div className="map__component" data-testid="map" ref={el => this.mapContainer = el} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    route: getRoute(state)
  }
}

export default connect(mapStateToProps)(Map);

export {Map};
