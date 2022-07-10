import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProductsList } from 'shared/api/actions/actionCreators';
import Section from 'shared/ui/Section/Section';
import Product from 'entities/product/Product';


const Catalog = () => {
  const { products, loading, error } = useSelector(state => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProductsList());
  }, []);

  const productsList = products.map(product => {
    const props = {
      id: product.id,
      name: product.title,
      price: product.price,
      img: product.images[0]
    }
    return <Product key={product.id} {...props} />
  });

  return (
    <>
    {products && !loading && !error && 
      <Section title="Каталог" sectionClass="catalog">
        <div className="row">
          {productsList}
        </div>
      </Section>
    }
    </>
    
  )
}

export default Catalog;