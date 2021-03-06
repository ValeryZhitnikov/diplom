import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderControlPics.css';

/**
 *  Header control images component
 */
const HeaderControlPics = () => {
  return (
    <div className="header-controls-pics">
      <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
      <Link to="/cart.html" className="header-controls-pic header-controls-cart">
        <div className="header-controls-cart-full">1</div>
        <div className="header-controls-cart-menu"></div>
      </Link>
    </div>
  );
}

export default HeaderControlPics;