import React, { useState } from 'react';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';

import './App.css';

const App = () => {
  const [page, setPage] = useState('login');
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ page", page)

  const pageObj = {
    login: <LoginPage onSetPage={setPage} />,
    register: <RegisterPage onSetPage={setPage} />,
    map: <MapPage onSetPage={setPage} />,
    profile: <ProfilePage onSetPage={setPage} /> 
  }

  return (
    <div className="app">
      {pageObj[page]}
    </div>
  );
}

export default App;
