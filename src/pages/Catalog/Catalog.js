import React from 'react';
import './Catalog.css';
import Layout from 'shared/ui/Layout/Layout';
import CatalogSection from 'shared/ui/CatalogSection/CatalogSection';

/**
 *  Catalog page
 */
const Catalog = () => {
  return (
    <Layout>
      <CatalogSection />
    </Layout>
  );
}

// #endregion

export default Catalog;