import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});