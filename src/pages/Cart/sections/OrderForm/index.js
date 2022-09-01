import React from 'react';
import './index.css';
import Section from 'shared/ui/Section/Section';
import MainButton from 'shared/ui/MainButton/MainButton';

const OrderForm = () => {
  return (
    <Section title="Оформить заказ" sectionClass="order">
      <div className="card card_order">
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input className="form-control" id="phone" placeholder="Ваш телефон" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input className="form-control" id="address" placeholder="Адрес доставки" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agreement" />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <MainButton type="submit" text="Оформить" buttonClass="btn-outline-secondary" />
        </form>
      </div>
    </Section>
  )
}

export default OrderForm;