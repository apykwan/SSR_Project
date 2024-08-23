import express from 'express';
import dotenv from 'dotenv';
// import { matchRoutes } from 'react-router-dom';

import renderer from './helpers/renderer';

dotenv.config();
const app = express();
app.use(express.static('public'));

app.get('*', async (req, res) => {
  const html = await renderer(req, res);
  res.send(html);
});

app.listen(5000, () => console.log("server is running"));