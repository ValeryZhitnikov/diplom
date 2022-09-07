import React from 'react';
import './Card.css';

const Card = props => {
  const { name, img, price, cardClass, cardButton } = props;

  return (
    <div className={`card ${cardClass}`}>
      {img && <img loading="lazy" src={img}
        className="card-img-top img-fluid" alt={name} />}
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{price}</p>
        {cardButton}
      </div>
    </div>
  )
}

export default Card;
