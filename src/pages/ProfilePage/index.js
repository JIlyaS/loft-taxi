import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ProfileContent from '../../components/ProfileContent';

import './style.css';

const ProfilePage = () => {
  return (
    <Fragment>
      <Header />
      <main className="profile-page">
        <div className="profile-page__wrapper">
          <ProfileContent />
        </div>
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
