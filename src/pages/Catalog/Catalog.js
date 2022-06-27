import React from 'react';
import './Catalog.css';
import Banner from '../../components/Banner/Banner';

/**
 *  Catalog page
 */
const Catalog = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
          </section>
        </div>
      </div>
    </main>
  );
}

// #endregion

export default Catalog;