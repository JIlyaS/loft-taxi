import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import {ControlledInput} from '.';

const defaultProps = {
  type: 'text',
  name: '',
  label: '',
  placeholder: '',
  value: '',
  classNameWrap: '',
  isAutofocus: false,
  isRequired: false,
  onChange: () => {},
};

const TestControlledInput = props => <ControlledInput {...defaultProps} {...props} />;

describe('ControlledInput', () => {
  it('renders correctly snapshot', () => {
      const tree = renderer.create(<TestControlledInput />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it("render card correctly with null props", () => {
      const props = {
        type: 'text',
        name: '',
        label: '',
        placeholder: '',
        value: '',
        classNameWrap: '',
        isAutofocus: false,
        isRequired: false,
        onChange: () => {},
      };
      const InputComponent = mount(<TestControlledInput {...props} />);
      expect(InputComponent.prop('type')).toEqual('text');
      expect(InputComponent.prop('value')).toEqual('');
    });
});
