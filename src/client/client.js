// Startup point for th eclinet side application
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import axios from 'axios';
import Routes from './Routes';

import { configureStore } from '@reduxjs/toolkit';

const router = createBrowserRouter(Routes);
import rootReducer from './reducers';

const rootElement = document.getElementById('root');

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

hydrateRoot(
  rootElement,
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);