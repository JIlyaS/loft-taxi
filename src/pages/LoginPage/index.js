import LoginForm from '../../components/LoginForm';
import logo from '../../assets/images/logo-auth.svg';
import './style.css';

const LoginPage = ({ onSetPage }) => {

  const handleLoginFormSubmit = (page) => {
    onSetPage(page);
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

export default LoginPage;