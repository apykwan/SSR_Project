import React from 'react';

import Home from './components/Home';
import UsersList from './components/UsersList';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    Component() {
      return <Home />;
    },
  },
  {
    path: '/users',
    Component() {
      return <UsersList />;
    },
  },
  {
    path: '*',
    Component() {
      return <NotFound />;
    },
  } 
];

export default routes;