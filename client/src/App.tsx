import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './views/Layout';
import { Home } from './views/Home';
import { BlogList } from './views/BlogList';
import { NoPage } from './views/NoPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<BlogList />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
