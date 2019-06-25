import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '.';

describe('Footer Component', () => {
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can shallowly render without props', () => {
    let footer = shallow(<Footer />);
    expect(footer.find('p').exists()).toBe(true);
  })
});
