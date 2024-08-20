import express from 'express';
import path from 'node:path';

import renderer from './helpers/renderer';

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(5000, () => console.log("server is running"));