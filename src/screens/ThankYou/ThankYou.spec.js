import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { ThankYou } from './ThankYou.js';

const defaultProps = {
  // props...
};

const wrapper = shallow(<ThankYou {...defaultProps} />)

describe('<ThankYou />', () => {

  it('renders without crashing', () => {
    expect(wrapper.exists('.ThankYou')).toBe(true);
  });
});