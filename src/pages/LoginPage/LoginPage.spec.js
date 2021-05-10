import React from 'react';
import {LoginPage} from './';
import renderer from 'react-test-renderer';

describe('LoginPage', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<LoginPage navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
