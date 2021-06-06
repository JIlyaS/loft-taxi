import React from 'react';

import LoginForm from '../../components/LoginForm';
import logo from '../../assets/images/logo-auth.svg';
import './style.css';

const LoginPage = () => {
  
  return (
    <div className="login-page" data-testid="login-page">
      <div className="login-page__left">
        <img className="login-page__logo" src={logo} alt="Логотип" />
      </div>
      <div className="login-page__right">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;

export {LoginPage};