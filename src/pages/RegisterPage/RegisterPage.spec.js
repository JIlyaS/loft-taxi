import React from 'react';
import {RegisterPage} from './';
import renderer from 'react-test-renderer';

describe('RegisterPage', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<RegisterPage navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
