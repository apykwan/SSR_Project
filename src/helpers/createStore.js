import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

import rootReducer  from '../client/reducers';

export default function (req) {
  try {
    const axiosInstance = axios.create({
      baseURL: 'http://react-ssr-api.herokuapp.com',
      headers: {
        cookie: req ? req.headers.cookie : '', 
      },
    });

    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstance,
        },
      }),
    });
  } catch (error) {
    console.log('error => ', error);
  }
};