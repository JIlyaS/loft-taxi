import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';

import './style.css';

const ProfilePage = ({page, navigateTo}) => {
  return (
    <Fragment>
      <Header />
      <main className="main-page">
        Profile
      </main>
    </Fragment>
  );
}

// ProfilePage.propTypes = {
//   page: PropTypes.string.isRequired,
//   navigateTo: PropTypes.func.isRequired,
// }

export default ProfilePage;

export {ProfilePage};
