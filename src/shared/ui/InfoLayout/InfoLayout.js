import React from 'react';
import './InfoLayout.css';
import PropTypes from 'prop-types';
import Layout from 'shared/ui/Layout/Layout';
import Section from '../Section/Section';

const propTypes = {
  title: PropTypes.string.isRequired
};

/**
 *  Info page 
 */
const InfoLayout = (props) => {
  const { title } = props;
  return (
    <Layout>
      <Section title={title}>
        {props.children}
      </Section>
    </Layout>
  );
}

InfoLayout.propTypes = propTypes;
// #endregion

export default InfoLayout;