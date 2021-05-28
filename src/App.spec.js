import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  // const { container } = render(<App />);
  // expect(container.innerHTML)
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});