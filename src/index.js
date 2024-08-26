import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';


import renderer from './helpers/renderer';


dotenv.config();
const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:5000';
    return opts;
  }
}));
app.use(express.static('public'));

app.get('*', async (req, res) => {
  const html = await renderer(req, res);
  res.send(html);
});

app.listen(5000, () => console.log("server is running"));