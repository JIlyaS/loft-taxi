import React from 'react';
import {ProfileForm} from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
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

describe('ProfileForm', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ProfileForm 
            isLoadingViewCard={false}
            fetchSetCardRequestAction={jest.fn()} 
            fetchGetCardRequestAction={jest.fn()} 
          />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct', () => {
    const { getByTestId } = renderWithRouter(
      <ProfileForm 
        isLoadingViewCard={false}
        fetchSetCardRequestAction={jest.fn()} f
        fetchGetCardRequestAction={jest.fn()} 
      />);
    const profileForm = getByTestId('profile-form');
    expect(profileForm).toBeInTheDocument();
  });

  it('Change user name successfully', () => {
    renderWithRouter(
      <ProfileForm 
        isLoadingViewCard={false}
        fetchSetCardRequestAction={jest.fn()} 
        fetchGetCardRequestAction={jest.fn()} 
      />);
    const input = screen.getByPlaceholderText('USER NAME');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'IVAN IVANOV' } });
    expect(input.value).toBe('IVAN IVANOV');
  });

  it('Change card number successfully', () => {
    renderWithRouter(
      <ProfileForm 
        isLoadingViewCard={false}
        fetchSetCardRequestAction={jest.fn()} 
        fetchGetCardRequestAction={jest.fn()} 
      />);
    const input = screen.getByPlaceholderText('1111 1111 1111 1111');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '2222 2222 2222 2222' } });
    expect(input.value).toBe('2222 2222 2222 2222');
  });
    
  it('Change date input successfully', () => {
    renderWithRouter(
      <ProfileForm
        isLoadingViewCard={false}
        fetchSetCardRequestAction={jest.fn()} 
        fetchGetCardRequestAction={jest.fn()} 
      />);
    const input = screen.getByPlaceholderText('MM/YY');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  it('Change cvc successfully', () => {
    renderWithRouter(
      <ProfileForm 
        isLoadingViewCard={false}
        fetchSetCardRequestAction={jest.fn()} 
        fetchGetCardRequestAction={jest.fn()} 
      />);
    const input = screen.getByPlaceholderText('667');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '888' } });
    expect(input.value).toBe('888');
  });
});
