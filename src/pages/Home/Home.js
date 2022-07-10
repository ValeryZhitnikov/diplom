import React from 'react';
import './Home.css';
import Layout from 'shared/ui/Layout/Layout';
import Popular from './sections/Popular/Popular';
import Catalog from './sections/Catalog/Catalog';

/**
 *  Home page
 */
const Home = () => {
  return (
    <Layout>
      <Popular />
      <Catalog />
    </Layout>
  );
}

// #endregion

export default Home;