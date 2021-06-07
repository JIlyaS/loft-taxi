import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Map from '../../components/Map';
import MapForm from '../../components/MapForm';
import OrderConfirm from '../../components/OrderConfirm';

import { getRouteSuccess } from '../../modules/route/selectors';

import './style.css';

const MapPage = ({
  isRouteSuccess
}) => {
  return (
    <Fragment>
      <Header />
      <main className="main-page" data-testid="map-page">
        {
          isRouteSuccess ? <OrderConfirm /> : <MapForm />
        }
        <Map />
      </main>
    </Fragment>
  );
}

MapPage.propTypes = {
  isRouteSuccess: PropTypes.bool.isRequired,
}

MapPage.defaultProps = {
  isRouteSuccess: false,
}

const mapStateToProps = (state) => {
  return {
    isRouteSuccess: getRouteSuccess(state),
  }
}

export default connect(mapStateToProps)(MapPage);

export {MapPage};
