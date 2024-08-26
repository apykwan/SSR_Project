import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer
});