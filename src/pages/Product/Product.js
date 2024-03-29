import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Product.css';
import Section from 'shared/ui/Section/Section';
import Layout from 'shared/ui/Layout/Layout';
import { ProductDetail } from 'entities/product';
import { getDataJson } from 'shared/api/fetch';
import Preloader from 'shared/ui/Preloader';
import ErrorComponent from 'shared/ui/ErrorComponent';

/**
 * Product page
 */
const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDataJson(`${process.env.REACT_APP_ITEMS_URL}/${productId}`, setProduct, setLoading, setError);
  }, []);

  return (
  <Layout>
    {!loading && error && <ErrorComponent error={error} />}
    {loading && <Preloader />}
    {product && !loading && !error &&
    (<Section sectionClass="catalog-item" title={product.title}>
      <ProductDetail product={product} />
    </Section>)
    }
  </Layout>);
}

export default Product;