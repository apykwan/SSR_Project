import React from 'react';
import { useLoaderData } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';
import { fetchUsers } from './reducers/usersReducer';
import { fetchCurrentUser } from './reducers/authReducer';
import { fetchAdmins } from './reducers/adminsReducer';
import createStore from '../helpers/createStore';
import RequireAuth from './components/hocs/RequireAuth';

const store = createStore();
export default [
  {
    path: '/',
    loader: async () => {
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
          // Dispatch the action directly to the store
          await store.dispatch(fetchUsers());

          // Return the relevant state data
          return store.getState().users;
        },
        element: <UsersListPageWithData />,
      },
      {
        path: '/admins',
        loader: async () => {
          await store.dispatch(fetchAdmins());
          return store.getState().admins;
        },
        element: (
          <RequireAuth>
            <AdminsListPageWithData />
          </RequireAuth>
        ),
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

function AdminsListPageWithData() {
  const data = useLoaderData();
  return <AdminsListPage adminData={data} />;
}