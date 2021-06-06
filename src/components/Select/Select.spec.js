import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Brightness1Icon from '@material-ui/icons/Brightness1';

import { Select } from './';

const defaultProps = {
  id: 'from',
  className: '',
  list: [],
  value: 'Пулково',
  iconStart: () => (
    <Brightness1Icon className="map-form__brightness-icon" />
  ),
  onChange: () => {}
};

const TestSelect = props => <Select {...defaultProps} {...props} />;

describe('Select', () => {
  it('renders correctly snapshot', () => {
      const tree = renderer.create(<TestSelect />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it("render card correctly with null props", () => {
      const props = {
        id: 'from',
        className: '',
        list: [],
        value: 'Пулково',
        iconStart: () => (
          <Brightness1Icon className="map-form__brightness-icon" />
        ),
        onChange: () => {}
      };
      const InputComponent = mount(<TestSelect {...props} />);
      expect(InputComponent.prop('id')).toEqual('from');
      expect(InputComponent.prop('value')).toEqual('Пулково');
    });
});
