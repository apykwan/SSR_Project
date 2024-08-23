import express from 'express';
import dotenv from 'dotenv';

import renderer from './helpers/renderer';
import store from './helpers/createStore';

dotenv.config();
const app = express();
app.use(express.static('public'));

app.get('*', async (req, res) => {
  // Some logic to initialize and load data into the store

  const result = await renderer(req, res, store);
  res.send(result);
});

app.listen(5000, () => console.log("server is running"));