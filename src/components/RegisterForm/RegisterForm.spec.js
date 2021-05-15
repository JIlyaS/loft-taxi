import React from 'react';
import RegisterForm from './';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('RegisterForm', () => {
  it('renders correctly spanshot', () => {
    const tree = renderer.create(<RegisterForm onRegisterForm={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Change mail successfully', () => {
    render(<RegisterForm onRegisterForm={() => {}} />);
    const input = screen.getByPlaceholderText('mail@mail.ru');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'mail@mail.ru' } });
    expect(input.value).toBe('mail@mail.ru');
  });

  it('Change name successfully', () => {
    render(<RegisterForm onRegisterForm={() => {}} />);
    const input = screen.getByPlaceholderText('Петр Александрович');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Илья' } });
    expect(input.value).toBe('Илья');
  });

  it('Change password successfully', () => {
    render(<RegisterForm onRegisterForm={() => {}} />);
    const input = screen.getByPlaceholderText('************');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(input.value).toBe('12345678');
  });
});
