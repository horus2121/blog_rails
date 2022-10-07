import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './state/store';

import { Login, User } from './views/Login';
import { Layout } from './views/Layout';
import { Home } from './views/Home';
import { BlogList } from './views/BlogList';
import { Blog } from './views/Blog';
import { NoPage } from './views/NoPage';
import { Signup } from './views/Signup';
import { Profile } from './views/Profile';



export const App = () => {
  const [user, setUser] = useState<User>({} as User)
  const userData = useSelector((state: RootState) => state.user)

  useEffect(() => {

    setUser(userData)
    console.log(user)
  })

  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={user.username ? <Home /> : <Login />} />
          <Route path='me' element={<Profile />} />
          <Route path='bloglist' element={<BlogList />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
