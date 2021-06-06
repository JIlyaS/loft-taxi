import React from 'react';
import {ProfileContent} from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {Provider} from 'react-redux';
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

describe('ProfileContent', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ProfileContent resetSuccessCardAction={jest.fn()} />
          </MuiPickersUtilsProvider>
        </Router>
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct', () => {
    const { getByTestId } = renderWithRouter(<ProfileContent resetSuccessCardAction={jest.fn()} />);
    const profileHeader = getByTestId('profile-header');
    expect(profileHeader).toBeInTheDocument();
  });
});
