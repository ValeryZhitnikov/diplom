import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Catalog from './pages/Catalog/Catalog';
import Info from './pages/Info/Info';
import Product from './pages/Product/Product';
import { AboutPageContent, ContactsPageContent } from './pages/contents/StaticPagesContent';

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
const paySystems = ['paypal', 'master-card', 'visa', 'yandex', 'webmoney', 'qiwi'];

function App() {
  return (
    <>
    <Header links={links} />
    <Routes>
      <Route path='/about.html' element={<Info title='О магазине' >{AboutPageContent}</Info>} />
      <Route path='/contacts.html' element={<Info title='Контакты' >{ContactsPageContent}</Info>} />
      <Route path='/catalog.html' element={<Catalog />} />
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer links={links} paySystems={paySystems} />
    </>
  );
}

export default App;
