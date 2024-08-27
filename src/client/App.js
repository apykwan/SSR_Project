import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from './components/Header';

function App ({ currentUser: { currentUser } }) {
  return (
    <div>
      <Helmet>
        <title>Users App</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
      <Header auth={currentUser} />
      <Outlet />
    </div>
  );
}

export default App;