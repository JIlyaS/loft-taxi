import React from 'react';
import {LoginForm} from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

const renderWithRouter = (component, {route='/', history = createMemoryHistory({ initialEntries: [route]})} = {}) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{ children }</Router>
  );

  return {
    ...render(component, {wrapper: Wrapper}),
    history,
  };
};

describe('LoginForm', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Router history={history}><LoginForm fetchLoginRequestAction={jest.fn()} /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct', () => {
    const { getByTestId } = renderWithRouter(<LoginForm fetchLoginRequestAction={jest.fn()} />);
    const registerForm = getByTestId('login-form');
    expect(registerForm).toBeInTheDocument();
  });

  it('Change user email successfully', () => {
    renderWithRouter(<LoginForm fetchLoginRequestAction={jest.fn()} />);
    const input = screen.getByPlaceholderText('mail@mail.ru');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'ilkolmakov@mail.ru' } });
    expect(input.value).toBe('ilkolmakov@mail.ru');
  });
    
  it('Change user password successfully', () => {
    renderWithRouter(<LoginForm fetchLoginRequestAction={jest.fn()} />);
    const input = screen.getByPlaceholderText('************');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});

