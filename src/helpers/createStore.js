import { configureStore } from '@reduxjs/toolkit';

import rootReducer  from '../client/reducers';

export default function () {
  return configureStore({
    reducer: rootReducer,
  });
};