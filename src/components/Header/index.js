/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {logOut} from '../../modules/auth';
import logo from '../../assets/images/logo.svg';
import './style.css';

const headerList = [
  {id: 'map', name: 'Карта', path: "/"},
  {id: 'profile', name: 'Профиль', path: "/profile"},
];

const Header = ({logOutAction}) => {

  const handleLogoutBtnClick = (evt) => {
    evt.preventDefault();
    logOutAction();
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          {
            headerList.map((item) => (
              <li className="header__nav-item" key={item.id}>
                <NavLink 
                  to={item.path}
                  className="header__nav-link"
                  activeClassName="header__nav-link--active"
                  exact
                >
                  { item.name }
                </NavLink>
              </li>
            ))
          }
          <li className="header__nav-item" key="login">
            <a 
              className="header__nav-link" 
              // data-testId="logout" 
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
  logOut: PropTypes.func,
}

const mapDispatchToProps = {
  logOutAction: logOut, 
};

export default connect(null, mapDispatchToProps)(Header);

export {Header};
