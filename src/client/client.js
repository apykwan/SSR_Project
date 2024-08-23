// Startup point for th eclinet side application
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Routes from './Routes';
import rootReducer from './reducers';

let router = createBrowserRouter(Routes);
const store = configureStore({
  reducer: rootReducer,
});

const rootElement = document.getElementById('root');

hydrateRoot(
  rootElement,
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);