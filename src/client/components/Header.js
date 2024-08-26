import React from 'react';
import { Link } from 'react-router-dom';

function Headers () {
  return (
    <div>
      <Link to="/">React SSR</Link>
      <Link to="/users">List of Users</Link>
    </div>
  );
}

export default Headers;