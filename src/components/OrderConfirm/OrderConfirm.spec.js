import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { OrderConfirm } from './';

describe('OrderConfirm', () => {

  it('renders correctly snapshot', () => {
    const tree = renderer.create(<OrderConfirm setOrderSuccessAction={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId } = render(<OrderConfirm setOrderSuccessAction={jest.fn()} />);
    expect(queryByTestId('order-confirm')).toBeInTheDocument();
    expect(queryByTestId('order-confirm-btn')).toBeInTheDocument();
  });

  it('Click new order taxi', () => {
    const { queryByTestId } = render(<OrderConfirm setOrderSuccessAction={jest.fn()} />);
    const orderConfirmBtn = queryByTestId('order-confirm-btn');
    expect(orderConfirmBtn).toBeInTheDocument();
    fireEvent.click(orderConfirmBtn);
    // expect(queryByTestId('map-form')).toBeInTheDocument();
  });
});