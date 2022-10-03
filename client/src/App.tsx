import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './views/Login';
import { Layout } from './views/Layout';
import { Home } from './views/Home';
import { BlogList } from './views/BlogList';
import { Blog } from './views/Blog';
import { NoPage } from './views/NoPage';
import { Signup } from './views/Signup';
import { Profile } from './views/Profile';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='me' element={<Profile />} />
          <Route path='bloglist' element={<BlogList />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
