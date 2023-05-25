import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import injectContext from './store/appContext';
import ScrollToTop from './component/scrollToTop';
import Header from './component/Header.jsx';
// views
import Home from './views/Home.jsx';
import Details from './views/Details.jsx';

const Layout = () => {
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:nature/:id' element={<Details />} />
              <Route path='*' element={<h1>Not found!</h1>} />
            </Routes>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
