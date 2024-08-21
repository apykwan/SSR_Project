import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import UsersList from './components/UsersList';
import NotFound from './components/NotFound';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};