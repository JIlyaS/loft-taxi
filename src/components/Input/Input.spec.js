import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import {Input} from './';

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

const TestInput = props => <Input {...defaultProps} {...props} />;

describe('Input', () => {
  it('renders correctly snapshot', () => {
      const tree = renderer.create(<TestInput />).toJSON();
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
      const InputComponent = mount(<TestInput {...props} />);
      expect(InputComponent.prop('type')).toEqual('text');
      expect(InputComponent.prop('value')).toEqual('');
    });
});
