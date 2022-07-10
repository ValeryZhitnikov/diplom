import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestPopularList } from 'shared/api/actions/actionCreators';
import Section from 'shared/ui/Section/Section';
import Product from 'entities/product/Product';

const Popular = () => {
  const { popularProducts, loading, error } = useSelector(state => state.popularList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPopularList());
  }, []);

  const popularProductsList = popularProducts.map(product => {
    const props = {
      id: product.id,
      name: product.title,
      price: product.price,
      img: product.images[0]
    }
    return <Product key={product.id} {...props} />
  });

  return(
    <>
      {popularProducts && !loading && !error && 
        <Section title="Хиты продаж!" sectionClass="top-sales">
          <div className="row">
            {popularProductsList}
          </div>
        </Section>
      }
    </>
  )
}

export default Popular;