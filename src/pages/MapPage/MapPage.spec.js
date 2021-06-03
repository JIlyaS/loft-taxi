import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createMemoryHistory } from 'history';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import renderer from 'react-test-renderer';

import {MapPage} from './';
import createStore from '../../store';

const store = createStore();

const renderWithRouter = (component, {route='/', history = createMemoryHistory({ initialEntries: [route]})} = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          { children }
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>
  );

  return {
    ...render(component, {wrapper: Wrapper}),
    history,
  };
};

describe('MapPage', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(
    <Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MapPage />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId } = renderWithRouter(<MapPage />);
    expect(queryByTestId('map-page')).toBeInTheDocument();
  });
});
