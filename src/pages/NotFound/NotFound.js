import React from 'react';
import './NotFound.css';
import Info from '../Info/Info';

/**
 *  Not found 404 page
 */
const NotFound = () => {
  return (
  <Info title='Страница не найдена'>
    <p>
      Извините, такая страница не найдена!
    </p>
  </Info>
  );
}

export default NotFound;