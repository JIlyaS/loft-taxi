import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {RegisterPage} from './';

describe('RegisterPage', () => {
  it('renders correctly spanshot', () => {
    const tree = renderer.create(<RegisterPage navigateTo={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId, getByAltText } = render(<RegisterPage navigateTo={() => {}} />);
    expect(queryByTestId('login-page')).toBeInTheDocument();
    expect(getByAltText('Логотип')).toBeInTheDocument();
  });
});
