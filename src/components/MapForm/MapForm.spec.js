import React from 'react';
import { MapForm } from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {Provider} from 'react-redux';
import createStore from '../../store';

const store = createStore();

const renderWithRouter = (component, {route='/', history = createMemoryHistory({ initialEntries: [route]})} = {}) => {
  const Wrapper = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          { children }
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>
  );

  return {
    ...render(component, {wrapper: Wrapper}),
    history,
  };
};

describe('MapForm', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MapForm
            addressList={['Пулково', 'Эрмитаж']}
            isLoadingRoute={false}
            isLoadingAddress={false}
            setToRouteAction={jest.fn()}
            setFromRouteAction={jest.fn()}
            fetchRouteRequestAction={jest.fn()}
            fetchAddressRequestAction={jest.fn()}
          />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct', () => {
    const { getByTestId } = renderWithRouter(
      <MapForm
            addressList={['Пулково', 'Эрмитаж']}
            isLoadingRoute={false}
            isLoadingAddress={false}
            setToRouteAction={jest.fn()}
            setFromRouteAction={jest.fn()}
            fetchRouteRequestAction={jest.fn()}
            fetchAddressRequestAction={jest.fn()}
          />);
    const mapForm = getByTestId('map-form');
    const mapFormTop = getByTestId('map-form-top');
    const mapFormBottom = getByTestId('map-form-bottom');
    expect(mapForm).toBeInTheDocument();
    expect(mapFormTop).toBeInTheDocument();
    expect(mapFormBottom).toBeInTheDocument();
  });

  it('Select from route successfully', () => {
    const { getByTestId } = renderWithRouter(
      <MapForm
            addressList={['Пулково', 'Эрмитаж']}
            isLoadingRoute={false}
            isLoadingAddress={false}
            setToRouteAction={jest.fn()}
            setFromRouteAction={jest.fn()}
            fetchRouteRequestAction={jest.fn()}
            fetchAddressRequestAction={jest.fn()}
          />);
    // const input = screen.getByPlaceholderText('USER NAME');
    // expect(input).toBeInTheDocument();
    // fireEvent.change(input, { target: { value: 'IVAN IVANOV' } });
    // expect(input.value).toBe('IVAN IVANOV');
  });

  it('Select to route successfully', () => {
    const { getByTestId } = renderWithRouter(
      <MapForm
            addressList={['Пулково', 'Эрмитаж']}
            isLoadingRoute={false}
            isLoadingAddress={false}
            setToRouteAction={jest.fn()}
            setFromRouteAction={jest.fn()}
            fetchRouteRequestAction={jest.fn()}
            fetchAddressRequestAction={jest.fn()}
          />);
    // const input = screen.getByPlaceholderText('1111 1111 1111 1111');
    // expect(input).toBeInTheDocument();
    // fireEvent.change(input, { target: { value: '2222 2222 2222 2222' } });
    // expect(input.value).toBe('2222 2222 2222 2222');
  });
});
