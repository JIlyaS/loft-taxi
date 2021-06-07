import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {Card} from './';

describe('Card', () => {

  it('renders correctly snapshot', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId } = render(<Card />);
    expect(queryByTestId('card-date')).toBeInTheDocument();
    expect(queryByTestId('card-number')).toBeInTheDocument();
  });
});