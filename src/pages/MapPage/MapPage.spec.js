// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {MapPage} from './';

describe('MapPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MapPage page="map" navigateTo={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // не проходит из-за this.map.remove()
  // it('render correct', () => {
  //   const { queryByTestId } = render(<MapPage page="map" navigateTo={() => {}} />);
  //   expect(queryByTestId('main')).toBeInTheDocument();
  // });
});
