import React from 'react';
import './Catalog.css';
import Layout from 'shared/ui/Layout/Layout';
import Section from 'shared/ui/Section/Section';

/**
 *  Catalog page
 */
const Catalog = () => {
  return (
    <Layout>
      <Section sectionClass="catalog" title="Каталог" />
    </Layout>
  );
}

// #endregion

export default Catalog;