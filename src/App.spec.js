import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';

import App from './App';
import createStore from './store';

const store = createStore();


describe('App', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Provider store={store}><Router history={history}><App /></Router></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});