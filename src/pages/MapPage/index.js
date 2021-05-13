import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Map from '../../components/Map';

import './style.css';

const MapPage = ({ page, navigateTo }) => {
  const handleSetPageClick = (page) => {
    navigateTo(page);
  };
  return (
    <Fragment>
      <Header page={page} navigateTo={handleSetPageClick} />
      <main className="main-page">
        <Map />
      </main>
    </Fragment>
  );
}

MapPage.propTypes = {
  page: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default MapPage;

export {MapPage};
