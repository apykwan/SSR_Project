// Startup point for th eclinet side application
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const rootElement = document.getElementById('root');

hydrateRoot(
  rootElement,
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);