// import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {Card} from './';

// const defaultProps = {
//   date: null,
//   numberCard: null,
// };

// const TestCard = props => <Card {...defaultProps} {...props} />;

describe('Card', () => {

  it('renders correctly snapshot', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render correct', () => {
    const { queryByTestId } = render(<Card />);
    expect(queryByTestId('card-date')).toBeInTheDocument();
    expect(queryByTestId('card-number')).toBeInTheDocument();
  });
  
  // it('render correct', () => {
  //   const { queryByTestId } = render(<Map />);
  //   expect(queryByTestId('map')).toBeInTheDocument();
  // });

  // it("render card correctly with null props", () => {
  //   const props = {
  //     date: null,
  //     numberCard: null,
  //   };
  //   const CardComponent = mount(<TestCard {...props} />);
  //   expect(CardComponent.prop("date")).toEqual(null);
  //   expect(CardComponent.prop("numberCard")).toEqual(null);
  // });


});