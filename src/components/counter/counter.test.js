import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '.';

describe('Counter Component', () => {
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('can shallowly render without props', () => {
    let counter = shallow(<Counter />);
    expect(counter.find('a').exists()).toBe(true);
  });
  it('can check if button was clicked', () => {
    let counter = mount(<Counter />);
    let button = counter.find('.up');
    expect(button.exists()).toBe(true);
    button.simulate('click');
    button.simulate('click');
    expect(counter.state('count')).toEqual(2);
  });
});
