import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';

import {Provider} from 'react-redux';
import createStore from '../../store';
import {DateInput} from './';

const store = createStore();

const defaultProps = {
  id: 'date-input',
  label: '',
  value: new Date(),
  classNameWrap: '',
  isRequired: false,
  setSelectedDate: () => {}
};

const TestDateInput = props => <DateInput {...defaultProps} {...props} />;

describe('DateInput', () => {
  it('renders correctly snapshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TestDateInput />
          </MuiPickersUtilsProvider>
        </Router>
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
    // it("render card correctly with null props", () => {
    //   const props = {
    //     id: 'date-input',
    //     label: '',
    //     value: new Date(),
    //     classNameWrap: '',
    //     isRequired: false,
    //     setSelectedDate: () => {}
    //   };
    //   const DateInputComponent = mount(<MuiPickersUtilsProvider utils={DateFnsUtils}>
    //     <TestDateInput {...props} />
    //   </MuiPickersUtilsProvider>);
    //   expect(DateInputComponent.prop("value")).toEqual(new Date());
    //   expect(DateInputComponent.prop("id")).toEqual('date-input');
    // });
});