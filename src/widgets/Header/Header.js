import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import NavItem from 'shared/ui/NavItem/NavItem';
import SearchFormHeader from './ui/SearchFormHeader';
import HeaderControlPics from './ui/HeaderControlPics/HeaderControlPics';
import headerLogo from './assets/header-logo.png'

const propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
  links: [
    { 
      'id' : 1,
      'title': 'Главная',
      'path': '/'
    }
  ]
};

/**
 *  Main header block component
 */
const Header = (props) => {
  const { links } = props;
  const [isOpen, setIsOpen] = useState(false);

  const searchOpenHandler = () => {
    setIsOpen(!isOpen);
  }

  const linksList = links.map(link => {
    return <NavItem key={link.id} path={link.path} text={link.title} />
  });

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            <img src={headerLogo} alt="Bosa Noga" />
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {linksList}
              </ul>
              <div>
                <HeaderControlPics searchOpenHandler={searchOpenHandler} />
                <SearchFormHeader isOpen={isOpen} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;