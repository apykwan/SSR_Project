import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Home from './pages/Home';
import UsersList from './pages/UsersList';
import NotFound from './pages/NotFound';
import { fetchUsers } from './reducers/usersReducer';
import createStore from '../helpers/createStore';

const routes = [
  {
    path: '/',
    Component() {
      return <Home />;
    },
  },
  {
    path: '/users',
    loader: async () => {
      const store = createStore();

      // Dispatch the action directly to the store
      await store.dispatch(fetchUsers());

      // Return the relevant state data
      return store.getState().users;
    },
    Component() {
      const data = useLoaderData();
      return <UsersList userData={data} />;
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