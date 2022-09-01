import React from 'react';
import { useSelector } from 'react-redux';
import Section from 'shared/ui/Section/Section';
import CartTableRow from './ui/CartTableRow';

const CartTable = () => {
  const cartList = useSelector(store => store.cartList);

  const cartListRows = cartList.cartList.map((cartItem, i) => {
    return <CartTableRow key={i} index={i+1} cartItem={cartItem} />
  })

  return (
    <Section title="Корзина" sectionClass="cart">
      {cartListRows.length > 0 && <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {cartListRows}
          <tr>
            <td colSpan="5" className="text-right">Общая стоимость</td>
            <td>{cartList.totalPrice} руб.</td>
          </tr>
        </tbody>
      </table>}
      {cartListRows.length < 1 && <p>Корзина пуста</p>}
    </Section>
  )

}

export default CartTable;