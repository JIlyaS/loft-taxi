import React from 'react';
// import PropTypes from 'prop-types';

import './style.css';

const PageNotFound = () => {
  return (
      <main className="main-page" data-testId="main">
        Страница не найдена
      </main>
  );
}

// MapPage.propTypes = {
//   page: PropTypes.string.isRequired,
//   navigateTo: PropTypes.func.isRequired,
// }

export default PageNotFound;

export {PageNotFound};
