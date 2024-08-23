import { configureStore } from '@reduxjs/toolkit';

import rootReducer  from '../client/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;