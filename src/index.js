import express from 'express';
import dotenv from 'dotenv';

import renderer from './helpers/renderer';
import store from './helpers/createStore';

dotenv.config();
const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  // Some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(5000, () => console.log("server is running"));