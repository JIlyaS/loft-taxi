import React from 'react';
import {Header} from './';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

// import {AuthContext} from '../../context/AuthContext';

describe('Header', () => {
  it('renders correctly spanshot', () => {
      const tree = renderer.create(<Header page="map" navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

//  it('Logout successfully', () => {
//     const { getByTestId } = render(<Header page="map" navigateTo={() => {}} />);
//     const context = useContext(AuthContext);
//  });
});
