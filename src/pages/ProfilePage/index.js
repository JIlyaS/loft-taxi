import React, { Fragment } from 'react';

import Header from '../../components/Header';

import './style.css';

const ProfilePage = ({onSetPage}) => {
  const handleSetPageClick = (page) => {
    onSetPage(page);
  };
  return (
    <Fragment>
      <Header onSetPage={handleSetPageClick} />
      <main className="main-page">
        Profile
      </main>
    </Fragment>
  );
}

export default ProfilePage;
