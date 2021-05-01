import React, { Fragment } from 'react';

import Header from '../../components/Header';

import './style.css';

const MapPage = ({ onSetPage }) => {
  const handleSetPageClick = (page) => {
    onSetPage(page);
  };
  return (
    <Fragment>
      <Header onSetPage={handleSetPageClick} />
      <main className="main-page">
        Map
      </main>
    </Fragment>
  );
}

export default MapPage;
