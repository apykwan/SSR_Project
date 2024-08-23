// Startup point for th eclinet side application
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Routes from './Routes';
import createStore from '../helpers/createStore';

const router = createBrowserRouter(Routes);
const store = createStore();

const rootElement = document.getElementById('root');

hydrateRoot(
  rootElement,
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);