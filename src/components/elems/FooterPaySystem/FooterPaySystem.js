import React from 'react';
import './FooterPaySystem.css'
import PropTypes from 'prop-types';

const propTypes = {
  payClass: PropTypes.string.isRequired
};

/**
 * Single pay system element in footer
 */
const FooterPaySystem = (props) => {
  const { payClass } = props;

  return <div className={`footer-pay-systems footer-pay-systems-${payClass}`}></div>;
}

FooterPaySystem.propTypes = propTypes;

export default FooterPaySystem;