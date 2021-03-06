import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ActionButton.css';

import { Glyphicon } from '@jgordy24/stalls-ui';

const ActionButton = ({
    action,
    actionText,
    classname,
    icon,
}) =>
    (
        <div className='ActionButton' style={buttonWrap}>
            <div onClick={action} className={classname} style={buttonStyles}>
                {icon && <Glyphicon icon={icon} />}
                {actionText}
            </div>
        </div>
    );

const buttonStyles = {
    width: '100%',
    // padding:        '0.25rem 0rem',
    cursor: 'pointer',
    margin: '0 auto',
    fontSize: '18px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textAlign: 'center'
};

const buttonWrap = {
    // padding:          '0.5rem',
    // border:           '1px solid var(--light-gray)',
    // borderRadius:     '5px',
    // width:            '85%',
    // margin:           '0 auto 3rem'
};

ActionButton.propTypes = {
    /**
     * The classname to apply to the root node
     */
    classname: PropTypes.string.isRequired,
    /**
     * The text to render at the root nodes
     */
    actionText: PropTypes.string.isRequired,
    /**
     * The Handler for action button click
     */
    action: PropTypes.func.isRequired,
    /**
     * The name of the Font Awesome icon to pass to the Glyphicon component
     */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
};

ActionButton.defaultProps = {
    action: () => { },
    actionText: '',
    classname: '',
    icon: null
};

export default ActionButton;
