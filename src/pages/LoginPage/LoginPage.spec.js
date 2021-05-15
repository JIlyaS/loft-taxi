import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {LoginPage} from './';

describe('LoginPage', () => {
  it('renders correctly spanshot', () => {
      const tree = renderer.create(<LoginPage navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  it('render correct', () => {
    const { queryByTestId, getByAltText } = render(<LoginPage navigateTo={() => {}} />);
    expect(queryByTestId('login-page')).toBeInTheDocument();
    expect(getByAltText('Логотип')).toBeInTheDocument();
  });
});
