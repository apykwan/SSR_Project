import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

function App ({ currentUser: { currentUser } }) {
  console.log(currentUser || null);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;