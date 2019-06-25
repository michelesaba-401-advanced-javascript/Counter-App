import React from 'react';
import renderer from 'react-test-renderer';

import Header from '.';

describe('Header Component', () => {
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can shallowly render without props', () => {
    let header = shallow(<Header />);
    expect(header.find('h1').exists()).toBe(true);
  });
});
