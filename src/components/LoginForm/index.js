import React, {useState} from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const LoginForm = ({ onLoginForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = (evt) => {
    evt.preventDefault();
    onLoginForm('register')
  };

  return (
    <div className="login-form">
      <form onSubmit={() => onLoginForm('map')}>
        <h2 className="login-form__title">Войти</h2>
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
          <a className="login-form__reg" href="/" onClick={handleRegisterClick}>Регистрация</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
