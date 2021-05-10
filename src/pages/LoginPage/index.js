import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import logo from '../../assets/images/logo-auth.svg';
import './style.css';

const LoginPage = ({ navigateTo }) => {

  const handleLoginFormSubmit = (page) => {
    navigateTo(page);
  }
  
  return (
    <div className="login-page">
      <div className="login-page__left">
        <img className="login-page__logo" src={logo} alt="Логотип" />
      </div>
      <div className="login-page__right">
        <LoginForm onLoginForm={handleLoginFormSubmit} />
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
}

export default LoginPage;

export {LoginPage};