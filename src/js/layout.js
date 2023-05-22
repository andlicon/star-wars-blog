import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';

import Home from './views/Home.jsx';
import injectContext from './store/appContext';

const Layout = () => {
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/character' element={<Home />} />
            <Route path='/planet' element={<Home />} />
            <Route path='*' element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
