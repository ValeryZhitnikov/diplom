import React, { useEffect, useState } from 'react';
import './CategoriesList.css';
import { getDataJson } from 'shared/api/fetch';
import ErrorComponent from 'shared/ui/ErrorComponent';
import Preloader from 'shared/ui/Preloader';

const CategoriesList = (props) => {
  const { selectedCategoryId, onSelectCategoryHandler } = props;
  const [categories, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDataJson(process.env.REACT_APP_CATEGORIES_URL, setCategoriesList, setLoading, setError);
  }, []);

  const categoriesList = categories ? categories.map(category => {
    return ( 
    <li key={category.id} className="nav-item">
      <button onClick={() => onSelectCategoryHandler(category.id)} className={`nav-link nav-link_category ${selectedCategoryId === category.id ? 'active' : ''}`} href="#">{category.title}</button>
    </li>);
  }) : [];

  return(
    <>
      {!loading && error && <ErrorComponent error={error} />}
      {loading && <Preloader />}
      {categories && !loading && !error && 
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <button onClick={() => onSelectCategoryHandler(null)} className={`nav-link nav-link_category ${!selectedCategoryId ? 'active' : ''}`} href="#">Все</button>
        </li>
        {categoriesList}
      </ul>
      }
    </>
  )
}

export default CategoriesList;
