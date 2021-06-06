import React from 'react';

import loader from '../../assets/images/loader.svg';

import './style.css';

const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      <img className="loader__img" src={loader} width="70px" height="70px" alt="Загрузка..." />
    </div>
  );
};

export { Loader };

export default Loader;
