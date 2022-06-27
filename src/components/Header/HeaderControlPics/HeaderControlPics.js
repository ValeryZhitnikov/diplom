import React from 'react';
import './HeaderControlPics.css';

/**
 *  Header control images component
 */
const HeaderControlPics = () => {
  return (
    <div className="header-controls-pics">
      <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
      <div className="header-controls-pic header-controls-cart">
        <div className="header-controls-cart-full">1</div>
        <div className="header-controls-cart-menu"></div>
      </div>
    </div>
  );
}

export default HeaderControlPics;