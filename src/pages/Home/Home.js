import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';

/**
 *  Home page
 */
const Home = () => {
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
          </div>
      </div>
    </main>
    );
}

// #endregion

export default Home;