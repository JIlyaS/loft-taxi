import renderer from 'react-test-renderer';

import { Loader } from './';

describe('Loader', () => {
  it('renders correctly snapshot', () => {
      const tree = renderer.create(<Loader />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});