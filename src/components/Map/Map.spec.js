import React from 'react';
import {Map} from './';
import renderer from 'react-test-renderer';

describe('Map', () => {

  it('renders correctly', () => {
      const tree = renderer.create(<Map />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
