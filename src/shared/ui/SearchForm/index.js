import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CATALOG_ROUTE = "/catalog.html";

const SearchForm = (props) => {
  const { formClasses } = props;
  const [searchInput, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    setSearchValue(q);
  }, [q]);

  const handleChange = ({target}) => {
    const value = target.value;
    setSearchValue(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`${CATALOG_ROUTE}?q=${searchInput}`, { replace: true });
  };

  return (
    <form onSubmit={submitHandler} className={formClasses}>
      {/* TODO Разобраться с ошибкой при пустом value у инпута */}
      <input onChange={handleChange} className="form-control" placeholder="Поиск" value={searchInput} />
    </form>
  )
}

export default SearchForm;