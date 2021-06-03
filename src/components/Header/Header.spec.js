import React from 'react';
import {Header} from './';
import { fireEvent, render } from '@testing-library/react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';

const renderWithRouter = (component, {route='/', history = createMemoryHistory({ initialEntries: [route]})} = {}) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{ children }</Router>
  );

  return {
    ...render(component, {wrapper: Wrapper}),
    history,
  };
};

describe('Header', () => {
  it('renders correctly spanshot', () => {
    const history = createMemoryHistory();
    const tree = renderer.create(<Router history={history}><Header /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the home page', () => {
    // const history = createMemoryHistory();
    // const { getByTestId } = render(
    //   <Router history={history}>
    //     <Header />
    //   </Router>
    // );
    const { getByTestId } = renderWithRouter(<Header />);
    const navbar = getByTestId('nav');
    const mapLink = getByTestId('map');
    const profileLink = getByTestId('profile');
    expect(navbar).toContainElement(mapLink);
    expect(navbar).toContainElement(profileLink);
  });

  it('should navigate to page', () => {
    // const history = createMemoryHistory();
    // const { getByTestId } = render(
    //   <Router history={history}>
    //     <Header />
    //   </Router>
    // );
    const { getByTestId } = renderWithRouter(<Header />);
    const navbar = getByTestId('nav');
    const profileLink = getByTestId('profile');

    fireEvent.click(profileLink);
    expect(navbar).toContainElement(profileLink);
  });
});
