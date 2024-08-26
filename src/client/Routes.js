import React from 'react';
import { useLoaderData } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import { fetchUsers } from './reducers/usersReducer';
import createStore from '../helpers/createStore';

const routes = [
  {
    path: '/',
    Component() {
      return <HomePage />;
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
      return <UsersListPage userData={data} />;
    },
  },
  {
    path: '*',
    Component() {
      return <NotFoundPage />;
    },
  } 
];

export default routes;