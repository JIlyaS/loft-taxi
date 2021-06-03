import React from 'react';
// import PropTypes from 'prop-types';

import RegisterForm from '../../components/RegisterForm';
import logo from '../../assets/images/logo-auth.svg';
import './style.css';

const RegisterPage = () => {
  
  return (
    <div className="login-page" data-testid="register-page">
      <div className="login-page__left">
        <img className="login-page__logo" src={logo} alt="Логотип" />
      </div>
      <div className="login-page__right">
        <RegisterForm />
      </div>
    </div>
  );
}

// RegisterPage.propTypes = {
//   navigateTo: PropTypes.func.isRequired,
// }

export default RegisterPage;

export {RegisterPage};
