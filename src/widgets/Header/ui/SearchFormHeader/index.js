import React from 'react';
import SearchForm from 'shared/ui/SearchForm';

/**
 *  Seacrh form component
 */
const SearchFormHeader = () => {
  // TODO Доделать открытие-закрытие формы в шапке
  const invisible = 'invisible';

  return (
    <SearchForm formClasses="header-controls-search-form form-inline"/>
  );
}

export default SearchFormHeader;