// Startup point for th eclinet side application
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Routes from './Routes';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const rootElement = document.getElementById('root');

hydrateRoot(
  rootElement,
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);