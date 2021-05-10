import React from 'react';
import {LoginForm} from './';
import renderer from 'react-test-renderer';

describe('LoginForm', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<LoginForm onLoginForm={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
