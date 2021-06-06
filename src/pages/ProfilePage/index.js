import React, { Fragment } from 'react';

import Header from '../../components/Header';
import ProfileContent from '../../components/ProfileContent';

import './style.css';

const ProfilePage = () => {
  return (
    <Fragment>
      <Header />
      <main className="profile-page" data-testid="profile-page">
        <div className="profile-page__wrapper">
          <ProfileContent />
        </div>
      </main>
    </Fragment>
  );
}

export default ProfilePage;

export {ProfilePage};
