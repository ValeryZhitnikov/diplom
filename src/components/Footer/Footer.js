import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import NavItem from '../elems/NavItem/NavItem';
import FooterPaySystem from '../elems/FooterPaySystem/FooterPaySystem';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterWidget from './FooterWidget/FooterWidget';

const copyright = 
  <section>
    <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
      Все права защищены.<br/>Доставка по всей России!
    </div>
  </section>;

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  paySystems: PropTypes.array
};

/**
 * Main footer block component
 */
const Footer = (props) => {
    const { links, paySystems } = props;

    const paySystemsList = paySystems.map((item, i) => {
      return <FooterPaySystem key={i} payClass={item} />
    })

    const linksList = links
      .filter(link => {
        return link.path != '/';
      })
      .map(link => {
        return <NavItem key={link.id} path={link.path} text={link.title} />
      });
    
    return (
    <>
    <footer className="container bg-light footer">
      <div className="row">
        <FooterWidget title="Информация">
          <ul className="nav flex-column">
            {linksList}
          </ul>
        </FooterWidget>
        <FooterWidget title="Принимаем к оплате" additional={copyright}>
          <div className="footer-pay">
            {paySystemsList}
          </div>
        </FooterWidget>
        <FooterWidget title="Контакты" widgetClass="text-right">
          <FooterContacts />
        </FooterWidget>
      </div>
    </footer>
    </>);
}

Footer.propTypes = propTypes;

export default Footer;