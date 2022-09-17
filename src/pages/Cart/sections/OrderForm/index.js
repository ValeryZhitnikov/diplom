import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import Section from 'shared/ui/Section/Section';
import MainButton from 'shared/ui/MainButton/MainButton';
import { postDataJson } from 'shared/api/fetch';
import { clearCart } from 'shared/lib/actions/actionCreators';
import Preloader from 'shared/ui/Preloader';
import ErrorComponent from 'shared/ui/ErrorComponent';

const initialForm = {
  phone: '',
  address: '',
  agreement: ''
}

const OrderForm = () => {
  const cartList = useSelector(store => store.cartList);
  const [form, setForm] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (form.phone != '' && form.address != '' && form.agreement) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  const items = cartList.cartList.map(item => {
    return {
      id: item.id,
      price: item.price,
      count: item.count
    }
  });

  const changeHandler = ({target}) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setForm( prevForm =>{
      return {...prevForm, [name]: value}
    });
  }

  const onSucces = () => {
    dispatch(clearCart());
    setSucces(true);
    setForm(initialForm);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const order = {
      owner: {
        phone: form.phone,
        address: form.address,
      },
      items,
    }
    
    postDataJson(process.env.REACT_APP_ORDER_URL, order, onSucces, setLoading, setError);
  }

  return (
    <>
    {!loading && error && <ErrorComponent error={error} />}
    {loading && <Preloader />}
    {!loading && !error && succes && <h2>Заказ оформлен!</h2>}
    {cartList.cartList.length > 0 && !loading && !error && !succes && <Section title="Оформить заказ" sectionClass="order">
      <div className="card card_order">
        <form onSubmit={submitHandler} className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input onChange={changeHandler} name="phone" className="form-control" id="phone" placeholder="Ваш телефон" value={form.phone} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input onChange={changeHandler} name="address" className="form-control" id="address" placeholder="Адрес доставки" value={form.address} />
          </div>
          <div className="form-group form-check">
            <input onChange={changeHandler} type="checkbox" name="agreement" className="form-check-input" id="agreement" />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <MainButton disabled={disabled} type="submit" text="Оформить" buttonClass="btn-outline-secondary" />
        </form>
      </div>
    </Section>}
    </>
  )
}

export default OrderForm;