/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {AuthContext} from '../../context/AuthContext';

import logo from '../../assets/images/logo.svg';
import './style.css';

const headerList = [
  {id: 'map', name: 'Карта'},
  {id: 'profile', name: 'Профиль'},
];

const Header = ({page, navigateTo}) => {
  const context = useContext(AuthContext);

  const handleHeaderClick = (evt, page) => {
    evt.preventDefault();
    navigateTo(page)
  };

  const handleLogoutBtnClick = (evt) => {
    context.logout();
    handleHeaderClick(evt, 'login')
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          {
            headerList.map((item) => (
              <li className="header__nav-item" key={item.id}>
                <a 
                  className={cn('header__nav-link', page === item.id && 'header__nav-link--active')} 
                  onClick={(evt) => handleHeaderClick(evt, item.id)}
                >
                  { item.name }
                </a>
              </li>
            ))
          }
          <li className="header__nav-item" key="login">
            <a 
              className={cn('header__nav-link', page === "login" && 'header__nav-link--active')} 
              data-testid='logout' 
              onClick={(evt) => handleLogoutBtnClick(evt)}>
                Выйти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
}

export default Header;

export {Header};
