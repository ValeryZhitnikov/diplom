import React from 'react';
import { NavLink  } from 'react-router-dom';
import './NavItem.css';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

/**
 * Navigate link component
 */
const NavItem = (props) => {
  const { path, text } = props;

  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>{text}</NavLink>
    </li>
  );
}

NavItem.propTypes = propTypes;

export default NavItem;