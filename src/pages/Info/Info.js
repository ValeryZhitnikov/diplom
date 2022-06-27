import React from 'react';
import './Info.css';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner/Banner';

const propTypes = {
  title: PropTypes.string.isRequired
};

/**
 *  Info page 
 */
const Info = (props) => {
  const { title } = props;
  return (
    <main className="container">
      <div className="row">
        <div className="col">
        <Banner />
        <section className="top-sales">
          <h2 className="text-center">{title}</h2>
          {props.children}
        </section>
        </div>
      </div>
    </main>
  );
}

Info.propTypes = propTypes;
// #endregion

export default Info;