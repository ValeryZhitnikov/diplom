import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeaderControlPics.css';

/**
 *  Header control images component
 */
const HeaderControlPics = (props) => {
  const { searchOpenHandler } = props;
  const cartList = useSelector(state => state.cartList);
  const cartCount = cartList.cartList.length;

  return (
    <div className="header-controls-pics">
      <div onClick={searchOpenHandler} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
      <Link to="/cart.html" className="header-controls-pic header-controls-cart">
        <div className="header-controls-cart-full">{cartCount}</div>
        <div className="header-controls-cart-menu"></div>
      </Link>
    </div>
  );
}

export default HeaderControlPics;