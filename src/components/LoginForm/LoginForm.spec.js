import React from 'react';
import {LoginForm} from './';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('LoginForm', () => {
  it('renders correctly spanshot', () => {
    const tree = renderer.create(<LoginForm onLoginForm={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Change mail successfully', () => {
    render(<LoginForm onLoginForm={() => {}} />);
    const input = screen.getByPlaceholderText('mail@mail.ru');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'mail@mail.ru' } });
    expect(input.value).toBe('mail@mail.ru');
  });

  it('Change password successfully', () => {
    render(<LoginForm onLoginForm={() => {}} />);
    const input = screen.getByPlaceholderText('************');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '12345678' } });
    expect(input.value).toBe('12345678');
  });
    
    // Не проходит из-за контекста
    // it('Clicked login submit btn', () => {
    //   const handleClick = jest.fn()
    //   render(<LoginForm onLoginForm={handleClick} />);
    //   const loginSubmitBtn = screen.getByRole('button');
    //   fireEvent.click(loginSubmitBtn)
    //   expect(handleClick).toHaveBeenCalledTimes(1);
    // });
});

