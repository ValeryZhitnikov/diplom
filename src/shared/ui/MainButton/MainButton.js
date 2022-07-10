import React from 'react';
import './MainButton.css';

const MainButton = props => {
  const { text, buttonClass, handlerClick } = props;

  return (
    <button onClick={handlerClick} className={`btn ${buttonClass}`}>{text}</button>
  )
}

export default MainButton;
