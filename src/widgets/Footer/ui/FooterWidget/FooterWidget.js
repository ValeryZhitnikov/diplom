import React from 'react';
import './FooterWidget.css';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  widgetClass: PropTypes.string
};

/**
 * Footer widget wrap component
 */
const FooterWidget = (props) => {
  const { title, additional, widgetClass } = props;

  return (
    <div className={`col ${widgetClass ? widgetClass : ''}`}>
      <section>
        <h5>{title}</h5>
        {props.children}
      </section>
      {additional}
    </div>
  );
}

FooterWidget.propTypes = propTypes;
// #endregion

export default FooterWidget;