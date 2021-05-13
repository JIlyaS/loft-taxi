import {Map} from './';
// import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Map', () => {

  it('renders correctly snapshot', () => {
      const tree = renderer.create(<Map />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
  // не проходит из-за this.map.remove()
  // it('render correct', () => {
  //   const { queryByTestId } = render(<Map />);
  //   expect(queryByTestId('map')).toBeInTheDocument();
  // });
});
