import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Input from '../Input';
import { getLoadingRegister } from '../../modules/auth/selectors';
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
  disabled: {
    backgroundColor: '#D8D7D5 !important',
    color: '#737373 !important'
  }
})(Button);

const RegisterForm = ({isLoadingRegister, fetchRegisterRequestAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const disabledRegisterBtn = !email || !password || !userName || isLoadingRegister; 

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    fetchRegisterRequestAction({email, password, userName});
  };

  return (
    <div className="register-form"  data-testid="register-form">
      <form onSubmit={handleRegisterSubmit}>
        <h2 className="register-form__title">Регистрация</h2>
        <Input 
          type="email"
          name="email" 
          label="Email" 
          placeholder="mail@mail.ru"
          value={email}
          classNameWrap="register-form__block"
          disabled={isLoadingRegister}
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
          disabled={isLoadingRegister} 
          classNameWrap="register-form__block" 
          onChange={(evt) => setUserName(evt.target.value)}
          isRequired
        />
        <Input 
          type="password"
          name="password" 
          label="Пароль" 
          placeholder="************"
          value={password} 
          disabled={isLoadingRegister}
          classNameWrap="register-form__block" 
          onChange={(evt) => setPassword(evt.target.value)}
          isRequired
        />
        <CssButton 
          className="register-form__login-btn" 
          type="submit" 
          variant="contained" 
          color="primary"
          disabled={disabledRegisterBtn}
          disableElevation 
          fullWidth
        >
          Зарегистрироваться
        </CssButton>
        <div className="register-form__new-block">
          <span className="register-form__new-text">Уже зарегестрированны?</span>
          <Link className="register-form__reg" to="/login">Войти</Link>
        </div>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  isLoadingRegister: PropTypes.bool.isRequired,
  fetchRegisterRequestAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isLoadingRegister: getLoadingRegister(state),
  };
};

export default connect(mapStateToProps, {
  fetchRegisterRequestAction: fetchRegisterRequest,
})(RegisterForm);

export {RegisterForm};
