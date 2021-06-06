import React from 'react';
import {RegisterForm} from './';
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

describe('RegisterForm', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <RegisterForm fetchRegisterRequestAction={jest.fn()} />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct', () => {
    const { getByTestId } = renderWithRouter(<RegisterForm fetchRegisterRequestAction={jest.fn()} />);
    const registerForm = getByTestId('register-form');
    expect(registerForm).toBeInTheDocument();
  });

  it('Change user email successfully', () => {
    renderWithRouter(<RegisterForm fetchRegisterRequestAction={jest.fn()} />);
    const input = screen.getByPlaceholderText('mail@mail.ru');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'ilkolmakov@mail.ru' } });
    expect(input.value).toBe('ilkolmakov@mail.ru');
  });

  it('Change user name successfully', () => {
    renderWithRouter(<RegisterForm fetchRegisterRequestAction={jest.fn()} />);
    const input = screen.getByPlaceholderText('Петр Александрович');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Иван Иванов' } });
    expect(input.value).toBe('Иван Иванов');
  });
    
  it('Change date input successfully', () => {
    renderWithRouter(<RegisterForm fetchRegisterRequestAction={jest.fn()} />);
    const input = screen.getByPlaceholderText('************');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});
