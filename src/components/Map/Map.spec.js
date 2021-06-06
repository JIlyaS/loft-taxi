import {Map} from './';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Map', () => {

  it('renders correctly snapshot', () => {
      const tree = renderer.create(<Map />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
  it('render correct', () => {
    const { queryByTestId } = render(<Map />);
    expect(queryByTestId('map')).toBeInTheDocument();
  });
});
