/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/images/logo.svg';
import './style.css';

const headerList = [
  {id: 'map', name: 'Карта'},
  {id: 'profile', name: 'Профиль'},
  {id: 'login', name: 'Выйти'}
];

const Header = ({onSetPage}) => {
  const handleHeaderClick = (evt, page) => {
    evt.preventDefault();
    onSetPage(page)
  };
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          {
            headerList.map((item) => (
              <li className="header__nav-item" key={item.id}>
                <a className="header__nav-link" onClick={(evt) => handleHeaderClick(evt, item.id)}>{ item.name }</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
