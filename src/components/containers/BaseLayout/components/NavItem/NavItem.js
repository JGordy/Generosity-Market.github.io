import React from 'react'
import { NavLink } from 'react-router-dom';

import {
  FontAwesome,
} from 'components/shared';

const NavItem = ({
  color,
  endpoint,
  icon,
  name,
}) => {

  return (
    <NavLink
      exact
      className='navLinks'
      to={`${endpoint}`}
      activeStyle={{
        color: color,
        transform: 'scale(1.1)',
      }}
    >
      {icon && <FontAwesome classname={icon} />}
      {name}
    </NavLink>
  );
}

export default NavItem;