import React from 'react';
import './Home.css';
import Layout from 'shared/ui/Layout/Layout';
import Popular from './sections/Popular/Popular';
import CatalogSection from 'shared/ui/CatalogSection/CatalogSection';

/**
 *  Home page
 */
const Home = () => {
  return (
    <Layout>
      <Popular />
      <CatalogSection />
    </Layout>
  );
}

export default Home;