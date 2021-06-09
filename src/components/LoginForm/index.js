import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Input from '../Input';
import { fetchLoginRequest } from '../../modules/auth/actions';
import { getLoadingLogin } from '../../modules/auth/selectors';

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

const LoginForm = ({isLoadingLogin, fetchLoginRequestAction}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLoginSubmit = (data) => {
    const { email, password } = data; 
    fetchLoginRequestAction({email, password});
  };

  return (
    <div className="login-form" data-testid="login-form">
      <form noValidate onSubmit={handleSubmit(handleLoginSubmit)}>
        <h2 className="login-form__title">Войти</h2>
        <Input 
          type="email"
          name="email" 
          label="Email" 
          placeholder="mail@mail.ru"
          register={register}
          validate={{
            required: true
          }}
          classNameWrap="login-form__block"
          disabled={isLoadingLogin}
          isError={errors.email?.type}
          isAutofocus
          isRequired
        />
        <span className="login-form__error-text">{errors.email?.type === 'required' && 'Введите email'}</span>
        <Input 
          type="password"
          name="password" 
          label="Пароль" 
          placeholder="************"
          register={register}
          validate={{
            required: true, minLength: 6
          }}
          classNameWrap="login-form__block"
          disabled={isLoadingLogin}
          isError={errors.password?.type}
          isRequired
        />
        <span className="login-form__error-text">
          {errors.password?.type === 'required' && 'Введите пароль'}
          {errors.password?.type === 'minLength' && 'Пароль должен содержать минимум 6 символов'}
        </span>
        <div className="login-form__link-block">
          <a className="login-form__forget-pass" href="/">Забыли пароль?</a>
        </div>
        <CssButton 
          className="login-form__login-btn" 
          type="submit" 
          variant="contained" 
          color="primary"
          disabled={isLoadingLogin}
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
};

const mapStateToProps = (state) => {
  return {
    isLoadingLogin: getLoadingLogin(state),
  }
}

export default connect(mapStateToProps, {
  fetchLoginRequestAction: fetchLoginRequest,
})(LoginForm);

export {LoginForm};
