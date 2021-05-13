import React from 'react';
import {Header} from './';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<Header page="map" navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
