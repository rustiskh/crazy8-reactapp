// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './scss/main.scss'

import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Breadcrumps from './components/global/Breadcrumps';
import MailForm from './components/global/MailForm';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';

import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';







function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumps />
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='*' element={<NotFound />} />
        <Route path='cart' element={<Cart />} />
      </Routes>

      <MailForm />
      <Footer />
    </div>
  );
}

export default App;
