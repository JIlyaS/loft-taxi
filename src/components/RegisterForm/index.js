import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {AuthContext} from '../../context/AuthContext';

import './style.css';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000',
      fontWeight: '500',
    }
  },
})(TextField);

const CssButton = withStyles({
  root: {
    marginTop: '30px',
    fontSize: '22px',
    fontWeight: '400',
    textTransform: 'capitalize',
    borderRadius: '70px'
  },
})(Button);

const RegisterForm = ({ onRegisterForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const context = useContext(AuthContext);

  const handleLoginClick = (evt) => {
    evt.preventDefault();
    onRegisterForm('login')
  };

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    context.login(email, password);
    onRegisterForm('map');
  };

  return (
    <div className="login-form">
      <form onSubmit={handleRegisterSubmit}>
        <h2 className="login-form__title">Регистрация</h2>
        <div className="login-form__block">
          <CssTextField 
            label="Email" 
            id="email" 
            value={email} 
            name="email"
            placeholder="mail@mail.ru" 
            size="small"
            margin="dense"
            onChange={(evt) => setEmail(evt.target.value)}
            fullWidth
            required
            autoFocus
          />
        </div>
        <div className="login-form__block">
          <CssTextField 
            label="Как вас зовут?" 
            id="name" 
            value={name} 
            name="name"
            placeholder="Петр Александрович" 
            size="small"
            margin="dense"
            onChange={(evt) => setName(evt.target.value)}
            fullWidth
            required
          />
        </div>
        <div className="login-form__block">
          <CssTextField  
            label="Пароль" 
            id="password" 
            value={password} 
            name="password"
            type="password"
            placeholder="************" 
            size="small"
            margin="dense"
            onChange={(evt) => setPassword(evt.target.value)}
            fullWidth
            required
          />
        </div>
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
          <a className="login-form__reg" href="/" onClick={handleLoginClick}>Войти</a>
        </div>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  onRegisterForm: PropTypes.func.isRequired,
}

export default RegisterForm;