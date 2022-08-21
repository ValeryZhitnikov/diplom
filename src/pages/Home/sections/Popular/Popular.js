import React, { useEffect, useState } from 'react';
import Section from 'shared/ui/Section/Section';
import { ProductCard } from 'entities/product';
import { getDataJson } from 'shared/api/fetch';
import Preloader from 'shared/ui/Preloader';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDataJson(process.env.REACT_APP_POPULAR_URL, setPopularProducts, setLoading, setError);
  }, []);

  const popularProductsList = popularProducts.map(product => {
    const props = {
      id: product.id,
      name: product.title,
      price: product.price,
      img: product.images[0]
    }
    return <ProductCard key={product.id} {...props} />
  });

  return(
    <>
      <Section title="Хиты продаж!" sectionClass="top-sales">
        {loading && <Preloader />}
        {popularProducts && !loading && !error && 
        <div className="row">
          {popularProductsList}
        </div>
        }
      </Section>
    </>
  )
}

export default Popular;