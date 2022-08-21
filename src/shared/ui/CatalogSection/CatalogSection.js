import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from 'shared/ui/Section/Section';
import { ProductCard } from 'entities/product';
import MainButton from '../MainButton/MainButton';
import SearchForm from '../SearchForm';
import CategoriesList from 'shared/ui/CatalogSection/CategoriesList/CategoriesList';
import { getDataJson } from 'shared/api/fetch';
import Preloader from '../Preloader';

const initialOffset = 6;
const offsetSize = 6;

const CatalogSection = () => {
  const [loadMore, setLoadMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [offsetUrl, setOffsetUrl] = useState(''); 
  const [currentOffset, setCurrentOfset] = useState(initialOffset); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const checkAndSetProducts = (products) => {
    products.length < offsetSize ? setLoadMore(false) : setLoadMore(true);
    setProducts(products);
  }

  useEffect(() => {
    const requestUrl = q ? `${process.env.REACT_APP_ITEMS_URL}?q=${q}` : process.env.REACT_APP_ITEMS_URL;
    getDataJson(requestUrl, checkAndSetProducts, setLoading, setError);
  }, [searchParams]);

  const loadProducts = (products) => {
    products.length < offsetSize ? setLoadMore(false) : setLoadMore(true);
    setProducts(prevProducts => {
      const productsSet = new Set([...prevProducts, ...products]);
      return [...productsSet];
    });
  }

  const onSelectCategoryHandler = (categoryId) => {
    setProducts([]);
    setCurrentOfset(initialOffset);
    setOffsetUrl('');
    const categoryUrl = categoryId ? `categoryId=${categoryId}` : '';
    setSelectedCategory(categoryUrl);
    const requestUrl = q ? `${process.env.REACT_APP_ITEMS_URL}?q=${q}&${categoryUrl}` : `${process.env.REACT_APP_ITEMS_URL}?${categoryUrl}`;
    getDataJson(requestUrl, checkAndSetProducts, setLoading, setError);
  }

  const loadMoreHandler = () => {
    setCurrentOfset(prevOffset => {
      return prevOffset += offsetSize;
    });

    const offsetUrl = selectedCategory ? `&offset=${currentOffset}` : `offset=${currentOffset}`;
    setOffsetUrl(offsetUrl);

    const search = q ? `&q=${q}` : ''; 
    
    const requestUrl = `${process.env.REACT_APP_ITEMS_URL}?${selectedCategory}${offsetUrl}${search}`;
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
        <CategoriesList selectedCategory={selectedCategory} onSelectCategoryHandler={onSelectCategoryHandler} />
        {loading && <Preloader />}
        {products && !loading && !error && 
        <>
        <div className="row">
          {productsList.length > 0 ? productsList : <p>Извините, таких товаров нет</p>}
        </div>
        {loadMore && 
        <div className="text-center">
          <MainButton handlerClick={loadMoreHandler} buttonClass="btn-outline-primary" text="Загрузить ещё" />
        </div>
        }
        </>
        }
      </Section>
    </>
    
  )
}

export default CatalogSection;