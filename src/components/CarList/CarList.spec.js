import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {CarList} from './';

const carList = [
  {
    name: 'Стандарт',
    cost: 150,
    type: 'standart',
    checked: true,
  },
  {
    name: 'Премиум',
    cost: 250,
    type: 'premium',
    checked: false,
  },
  {
    name: 'Бизнес',
    cost: 300,
    type: 'business',
    checked: false,
  },
];

describe('CarList', () => {

  it('renders correctly snapshot', () => {
    const tree = renderer.create(<CarList carList={carList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId } = render(<CarList carList={carList} />);
    expect(queryByTestId('car-list')).toBeInTheDocument();
    expect(queryByTestId('car-list-standart')).toBeInTheDocument();
    expect(queryByTestId('car-list-premium')).toBeInTheDocument();
    expect(queryByTestId('car-list-business')).toBeInTheDocument();
  });
});
