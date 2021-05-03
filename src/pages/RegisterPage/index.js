import RegisterForm from '../../components/RegisterForm';
import logo from '../../assets/images/logo-auth.svg';
import './style.css';

const RegisterPage = ({ onSetPage }) => {

  const handleRegisterFormSubmit = (page) => {
    onSetPage(page);
  }
  
  return (
    <div className="login-page">
      <div className="login-page__left">
        <img className="login-page__logo" src={logo} alt="Логотип" />
      </div>
      <div className="login-page__right">
        <RegisterForm onRegisterForm={handleRegisterFormSubmit} />
      </div>
    </div>
  );
}

export default RegisterPage;
