import React from 'react';
import {ProfilePage} from './';
import renderer from 'react-test-renderer';

// jest.mock('../../components/Header', () => ({ Header: () => <div/>}));

describe('ProfilePage', () => {
  it('renders correctly', () => {
      const tree = renderer.create(<ProfilePage  page="profile" navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});