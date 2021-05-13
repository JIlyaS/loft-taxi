import {ProfilePage} from './';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';

describe('ProfilePage', () => {
  it('renders correctly snapshot', () => {
      const tree = renderer.create(<ProfilePage  page="profile" navigateTo={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
      const {getByText} = render(<ProfilePage  page="profile" navigateTo={() => {}} />);
      expect(getByText('Profile')).toBeInTheDocument();
    });
});