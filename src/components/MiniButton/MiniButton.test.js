import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import MiniButton from './MiniButton.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
};

const testElement = <MiniButton {...defaultProps} />;

describe('<MiniButton />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(testElement, div);
    });
});
