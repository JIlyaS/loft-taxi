import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Provider} from 'react-redux';

import {ProfilePage} from './';
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

describe('ProfilePage', () => {
  it('renders correctly snapshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ProfilePage />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = renderWithRouter(<ProfilePage />);
    expect(queryByTestId('profile-page')).toBeInTheDocument();
  });
});
