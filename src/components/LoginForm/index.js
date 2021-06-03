import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Input from '../Input';
import { fetchLoginRequest } from '../../modules/auth/actions';

import './style.css';

const CssButton = withStyles({
  root: {
    marginTop: '30px',
    fontSize: '22px',
    fontWeight: '400',
    textTransform: 'capitalize',
    borderRadius: '70px'
  },
})(Button);

const LoginForm = ({fetchLoginRequestAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    fetchLoginRequestAction({email, password});
  };

  return (
    <div className="login-form" data-testid="login-form">
      <form onSubmit={handleLoginSubmit}>
        <h2 className="login-form__title">Войти</h2>
        <Input 
          type="email"
          name="email" 
          label="Email" 
          placeholder="mail@mail.ru"
          value={email} 
          classNameWrap="login-form__block" 
          onChange={(evt) => setEmail(evt.target.value)}
          isAutofocus
          isRequired
        />
        <Input 
          type="password"
          name="password" 
          label="Пароль" 
          placeholder="************"
          value={password} 
          classNameWrap="login-form__block" 
          onChange={(evt) => setPassword(evt.target.value)}
          isRequired
        />
        <div className="login-form__link-block">
          <a className="login-form__forget-pass" href="/">Забыли пароль?</a>
        </div>
        <CssButton 
          className="login-form__login-btn" 
          type="submit" 
          variant="contained" 
          color="primary" 
          disableElevation 
          fullWidth
        >
          Войти
        </CssButton>
        <div className="login-form__new-block">
          <span className="login-form__new-text">Новый пользователь?</span>
          <Link className="login-form__reg" to="/register">Регистрация</Link>
        </div>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  fetchLoginRequestAction: PropTypes.func.isRequired,
}

export default connect(null, {
  fetchLoginRequestAction: fetchLoginRequest,
})(LoginForm);

export {LoginForm};
