import React from 'react';
import './SearchForm.css'

/**
 *  Seacrh form component
 */
const SearchForm = () => {
  return (
    <form data-id="search-form" className="header-controls-search-form form-inline invisible">
      <input className="form-control" placeholder="Поиск" />
    </form>
  );
}

export default SearchForm;