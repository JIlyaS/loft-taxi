import React, { useState, useContext, useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';

import { withAuth } from './hocs/Auth';
import {AuthContext} from './context/AuthContext';

import './App.css';

const App = (props) => {
  const [page, setPage] = useState('map');
  const context = useContext(AuthContext);

  useEffect(() => {
    if (!context.isLoggedIn) {
      if (page === 'register' || page === 'login') {
        setPage(page);
      } else {
        setPage('login');
      }
    }
  }, [context.isLoggedIn, page]);


  const navigateTo = (page) => {
    setPage(page);
  }

  const pageObj = {
    login: <LoginPage navigateTo={navigateTo} />,
    register: <RegisterPage navigateTo={navigateTo} />,
    map: <MapPage navigateTo={navigateTo} page={page} />,
    profile: <ProfilePage navigateTo={navigateTo} page={page} /> 
  }

  return (
    <div className="app">
      {pageObj[page]}
    </div>
  );
}

export default withAuth(App);
