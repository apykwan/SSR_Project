// Startup point for th eclinet side application
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import axios from 'axios';
import { HelmetProvider } from 'react-helmet-async';

import Routes from './Routes';
import rootReducer from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance,
      },
    }),
});

const router = createBrowserRouter(Routes);

const rootElement = document.getElementById('root');
hydrateRoot(
  rootElement,
  <Provider store={store}>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </Provider>
);