import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import InputGroup from './InputGroup';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  handleUpdateState: () => { },
  state: {
    icon: null,
    name: '',
    type: '',
    organization_name: '',
    tax_id: '',
    goal: '',
    description: '',
    purpose: '',
    profile_image: '',
    profileURL: '',
    cover_image: '',
    coverURL: '',
    roundImage: true,
    whiteText: true
  },
};

const testElement = <InputGroup {...defaultProps} />;

describe('<InputGroup />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
