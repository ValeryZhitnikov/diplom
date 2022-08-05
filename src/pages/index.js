import { Route, Routes, Redirect } from "react-router-dom";

import Home from './Home/Home';
import Cart from './Cart/Cart';
import NotFound from './NotFound/NotFound';
import Catalog from './Catalog/Catalog';
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import Product from './Product/Product';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/cart.html' element={<Cart />} />
      <Route path='/about.html' element={<About />} />
      <Route path='/contacts.html' element={<Contacts />} />
      <Route exact path="/catalog/:productId.html" element={<Product />} />
      <Route path='/catalog.html' element={<Catalog />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};