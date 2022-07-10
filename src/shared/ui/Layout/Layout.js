import React from 'react';
import Header from 'widgets/Header/Header';
import Footer from 'widgets/Footer/Footer';
import Banner from 'shared/ui/Banner/Banner';
import './Layout.css';

const links = [
  {
    'id': 1,
    'title': 'Главная',
    'path': '/'
  },
  { 
    'id': 2,
    'title': 'Каталог',
    'path': '/catalog.html'
  },
  { 
    'id': 3,
    'title': 'О магазине',
    'path': '/about.html'
  },
  { 
    'id': 4,
    'title': 'Контакты',
    'path': '/contacts.html'
  },
];

const Layout = (props) => {
  return (
    <>
    <Header links={links} />
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          {props.children}
        </div>
      </div>
    </main>
    <Footer links={links} />
    </>
  )
}

export default Layout;