import React, { useEffect, useState } from 'react';
import './CategoriesList.css';
import { getDataJson } from 'shared/api/fetch';

const CategoriesList = (props) => {
  const { selectedCategory, onSelectCategoryHandler } = props;
  const [categories, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDataJson(process.env.REACT_APP_CATEGORIES_URL, setCategoriesList, setLoading, setError);
  }, []);

  const categoriesList = categories ? categories.map(category => {
    return ( 
    <li key={category.id} className="nav-item">
      {/* TODO Доделать выделение активной категории */}
      <button onClick={() => onSelectCategoryHandler(category.id)} className={`nav-link nav-link_category`} href="#">{category.title}</button>
    </li>);
  }) : [];

  return(
    <>
      {categories && !loading && !error && 
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <button onClick={() => onSelectCategoryHandler(null)} className="nav-link nav-link_category active" href="#">Все</button>
        </li>
        {categoriesList}
      </ul>
      }
    </>
  )
}

export default CategoriesList;
