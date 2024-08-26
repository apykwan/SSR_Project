import React from 'react';
import { useLoaderData } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import { fetchUsers } from './reducers/usersReducer';
import { fetchCurrentUser } from './reducers/authReducer';
import createStore from '../helpers/createStore';

export default [
  {
    path: '/',
    loader: async () => {
      const store = createStore();
      await store.dispatch(fetchCurrentUser());
      return store.getState().auth.currentUser;
    },
    element: <LoadCurrentUser />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
        element: <UsersListPageWithData />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

function LoadCurrentUser() {
  const data = useLoaderData();
  return <App currentUser={data} />;
}

function UsersListPageWithData() {
  const data = useLoaderData();
  return <UsersListPage userData={data} />;
}

