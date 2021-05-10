import React from 'react';
import {MapPage} from './';
import renderer from 'react-test-renderer';

describe('MapPage', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<MapPage page="map" navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
