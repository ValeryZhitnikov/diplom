import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  widgetClass: PropTypes.string
};

const Section = (props) => {
  const { title, sectionClass } = props

  return (
    <section className={sectionClass}>
      {title && <h2 className="text-center">{title}</h2>}
      {props.children}
    </section>
  )
}

Section.propTypes = propTypes;

export default Section;
