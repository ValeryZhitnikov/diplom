import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'shared/lib/actions/actionCreators';
import { Link } from 'react-router-dom';
import MainButton from 'shared/ui/MainButton/MainButton';

const CartTableRow = (props) => {
  const { cartItem, index } = props;
  const dispatch = useDispatch();

  const deleteRowHandler = (id, size) => {
    dispatch(deleteFromCart(id, size));
  }
  
  return (
    <tr>
      <td scope="row">{index}</td>
      <td><Link to={`/catalog/${cartItem.id}.html`}>{cartItem.name}</Link></td>
      <td>{cartItem.size}</td>
      <td>{cartItem.count}</td>
      <td>{cartItem.price} руб.</td>
      <td>{cartItem.price * cartItem.count} руб.</td>
      <td><MainButton handlerClick={() => deleteRowHandler(cartItem.id, cartItem.size)} text="Удалить" buttonClass="btn-outline-danger btn-sm" /></td>
    </tr>
  )
}

export default CartTableRow;