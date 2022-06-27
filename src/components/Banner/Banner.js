import React from 'react';
import './Banner.css';
import banner from '../../img/banner.jpg';

/**
 *  Banner component
 */
const Banner = () => {
    return (
    <div className="banner">
      <img src={banner} className="img-fluid" alt="К весне готовы!" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

export default Banner;