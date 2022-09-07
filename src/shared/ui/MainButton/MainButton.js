import React from 'react';
import './MainButton.css';

const MainButton = props => {
  const { text, buttonClass, handlerClick, type, disabled } = props;

  return (
    <button disabled={disabled} type={type} onClick={handlerClick} className={`btn ${buttonClass}`}>{text}</button>
  )
}

export default MainButton;
