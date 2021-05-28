import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Input from '../Input';
import { fetchRegisterRequest } from '../../modules/auth/actions';

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

const RegisterForm = ({fetchRegisterRequestAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    fetchRegisterRequestAction({email, password, userName});
  };

  return (
    <div className="login-form">
      <form onSubmit={handleRegisterSubmit}>
        <h2 className="login-form__title">Регистрация</h2>
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
          type="text"
          name="name" 
          label="Как вас зовут?" 
          placeholder="Петр Александрович"
          value={userName} 
          classNameWrap="login-form__block" 
          onChange={(evt) => setUserName(evt.target.value)}
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
        <CssButton 
          className="login-form__login-btn" 
          type="submit" 
          variant="contained" 
          color="primary" 
          disableElevation 
          fullWidth
        >
          Зарегистрироваться
        </CssButton>
        <div className="login-form__new-block">
          <span className="login-form__new-text">Уже зарегестрированны?</span>
          <Link className="login-form__reg" to="/login">Войти</Link>
        </div>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  fetchRegisterRequestAction: PropTypes.func.isRequired,
}

export default connect(null, {
  fetchRegisterRequestAction: fetchRegisterRequest,
})(RegisterForm);

export {RegisterForm};
