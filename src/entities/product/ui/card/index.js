import React from 'react';
import Card from 'shared/ui/Card/Card';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { id, name, price, img } = props;
  const cardButton = <Link to={`/catalog/${id}.html`} className='btn btn-outline-primary'>Заказать</Link>

  const cardProps = {
    name,
    price: `${price} руб.`,
    img,
    cardClass: 'catalog-item-card',
    cardButton
  }

  return (<div className="col-4"><Card {...cardProps}/></div>)
}

export default ProductCard;