import React from 'react';

import ProfileForm from '../ProfileForm';

import './style.css';

const ProfileContent = () => {
  return (
    <div className="profile-content">
      <h2 className="profile-content__header">Профиль</h2>
      <p className="profile-content__paragraph">Введите платёжные данные</p>
      <div className="profile-content__block">
        <ProfileForm />
      </div>
    </div>
  );
}

export default ProfileContent;

export {ProfileContent};
