import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from 'shared/ui/Section/Section';
import { ProductCard } from 'entities/product';
import MainButton from '../MainButton/MainButton';
import SearchForm from '../SearchForm';
import CategoriesList from 'shared/ui/CatalogSection/CategoriesList/CategoriesList';
import { getDataJson } from 'shared/api/fetch';

const initialOffset = 6;
const offsetSize = 6;

const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [offsetUrl, setOffsetUrl] = useState(''); 
  const [currentOffset, setCurrentOfset] = useState(initialOffset); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    const requestUrl = q ? `${process.env.REACT_APP_ITEMS_URL}?q=${q}` : process.env.REACT_APP_ITEMS_URL;
    getDataJson(requestUrl, setProducts, setLoading, setError);
  }, [searchParams]);

  const loadProducts = (products) => {
    setProducts(prevProducts => {
      const productsSet = new Set([...prevProducts, ...products]);
      return [...productsSet];
    });
  }

  const onSelectCategoryHandler = (categoryId) => {
    setProducts([]);
    setCurrentOfset(initialOffset);
    setOffsetUrl('');
    const categoryUrl = categoryId ? `?categoryId=${categoryId}` : '';
    setSelectedCategory(categoryUrl);
    const requestUrl = `${process.env.REACT_APP_ITEMS_URL}${categoryUrl}`;
    getDataJson(requestUrl, setProducts, setLoading, setError);
  }

  // TODO Разобраться как обрабатывать количество товаров в категории
  const loadMoreHandler = () => {
    setCurrentOfset(prevOffset => {
      return prevOffset += offsetSize;
    });
    const offsetUrl = selectedCategory ? `&?offset=${currentOffset}` : `?offset=${currentOffset}`;
    setOffsetUrl(offsetUrl);
    const requestUrl = `${process.env.REACT_APP_ITEMS_URL}${selectedCategory}${offsetUrl}`;
    getDataJson(requestUrl, loadProducts, setLoading, setError);
  }

  const productsList = products.map(product => {
    const props = {
      id: product.id,
      name: product.title,
      price: product.price,
      img: product.images[0]
    }
    return <ProductCard key={product.id} {...props} />
  });

  return (
    <>
      <Section title="Каталог" sectionClass="catalog">
        <SearchForm formClasses="catalog-search-form form-inline" />
        <CategoriesList onSelectCategoryHandler={onSelectCategoryHandler} />
        {products && !loading && !error && 
        <>
        <div className="row">
          {productsList}
        </div>
        <div className="text-center">
          <MainButton handlerClick={loadMoreHandler} buttonClass="btn-outline-primary" text="Загрузить ещё" />
        </div>
        </>
        }
      </Section>
    </>
    
  )
}

export default CatalogSection;