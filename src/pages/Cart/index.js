import React from 'react';
import './Cart.css';
import Layout from 'shared/ui/Layout/Layout';
import CartTable from './sections/CartTable';
import OrderForm from './sections/OrderForm';

/**
 *  Cart page
 */
const Cart = () => {
  return (
  <Layout>
    <CartTable />
    <OrderForm />
  </Layout>);
}

export default Cart;