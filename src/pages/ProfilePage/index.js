import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import './style.css';

const ProfilePage = ({page, navigateTo}) => {
  const handleSetPageClick = (page) => {
    navigateTo(page);
  };
  return (
    <Fragment>
      <Header page={page} navigateTo={handleSetPageClick} />
      <main className="main-page">
        Profile
      </main>
    </Fragment>
  );
}

ProfilePage.propTypes = {
  page: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default ProfilePage;

export {ProfilePage};
