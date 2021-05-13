import React from 'react';
import RegisterForm from './';
import renderer from 'react-test-renderer';

describe('RegisterForm', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<RegisterForm onRegisterForm={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
