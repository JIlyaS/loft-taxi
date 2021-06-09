import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';

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

  const { register, handleSubmit, formState: { errors } } = useForm();
  const disabledRegisterBtn = isLoadingRegister; 

  const handleRegisterSubmit = (data) => {
    const { email, password, userName } = data;
    fetchRegisterRequestAction({email, password, name: userName});
  };

  return (
    <div className="register-form"  data-testid="register-form">
      <form noValidate onSubmit={handleSubmit(handleRegisterSubmit)}>
        <h2 className="register-form__title">Регистрация</h2>
        <Input 
          type="email"
          name="email" 
          label="Email" 
          placeholder="mail@mail.ru"
          classNameWrap="register-form__block"
          register={register}
          validate={{
            required: true
          }}
          disabled={isLoadingRegister}
          isError={errors.email?.type}
          isAutofocus
          isRequired
        />
        <span className="register-form__error-text">{errors.email?.type === 'required' && 'Введите email'}</span>
        <Input 
          type="text"
          name="name" 
          label="Как вас зовут?" 
          placeholder="Петр Александрович"
          disabled={isLoadingRegister}
          classNameWrap="register-form__block" 
          register={register}
          validate={{
            required: true, minLength: 4
          }}
          isError={errors.name?.type}
          isRequired
        />
        <span className="register-form__error-text">
          {errors.name?.type === 'required' && 'Введите имя'}
          {errors.name?.type === 'minLength' && 'Имя должно содержать минимум 4 символа'}
        </span>
        <Input 
          type="password"
          name="password" 
          label="Придумайте пароль" 
          placeholder="************"
          register={register}
          validate={{
            required: true, minLength: 6
          }}
          disabled={isLoadingRegister}
          classNameWrap="register-form__block" 
          isError={
            errors.password?.type
          }
          isRequired
        />
        <span className="register-form__error-text">
          {errors.password?.type === 'required' && 'Введите пароль'}
          {errors.password?.type === 'minLength' && 'Пароль должен содержать минимум 6 символов'}
        </span>
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
