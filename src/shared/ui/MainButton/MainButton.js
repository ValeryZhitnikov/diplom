import React from 'react';
import './MainButton.css';

const MainButton = props => {
  const { text, buttonClass, handlerClick, type } = props;

  return (
    <button type={type} onClick={handlerClick} className={`btn ${buttonClass}`}>{text}</button>
  )
}

export default MainButton;
