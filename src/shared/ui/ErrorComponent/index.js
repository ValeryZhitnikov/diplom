import React from 'react';

const ErrorComponent = (props) => {
  const { error } = props;

  return(
    <div className="error-alert alert-danger p-3">
      <p>К сожалению произошла ошибка.</p>
      Текст ошибки - <strong>{error}</strong>
    </div>
  )
}

export default ErrorComponent;