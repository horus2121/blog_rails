import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './features/store';

import { Login } from './views/Login';
import { Layout } from './views/Layout';
import { Home } from './views/Home';
import { BlogList } from './views/BlogList';
import { Blog } from './views/Blog';
import { NoPage } from './views/NoPage';
import { Signup } from './views/Signup';
import { Profile } from './views/Profile';

export const App = () => {
  const user = useSelector((state: RootState) => state.users)

  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={user.isLoggedIn ? <Home /> : <Login />} />
          <Route path='me' element={user.isLoggedIn ? <Profile /> : <Login />} />
          <Route path='bloglist' element={user.isLoggedIn ? <BlogList /> : <Login />} />
          <Route path='blog' element={user.isLoggedIn ? <Blog /> : <Login />} />
          <Route path='*' element={user.isLoggedIn ? <NoPage /> : <Login />} />
        </Route>
      </Routes>
    </Router>
  );
}
