import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Routes from '../client/Routes';
import createFetchRequest from './request';
import createStore from './createStore';

const handler = createStaticHandler(Routes);

export default async (req, res) => {
  const store = createStore(req);
  const fetchRequest = createFetchRequest(req, res);
  const context = await handler.query(fetchRequest);

  if (
    context instanceof Response &&
    [301, 302, 303, 307, 308].includes(context.status)
  ) {
    return res.redirect(
      context.status,
      context.headers.get("Location")
    );
  }

  const router = createStaticRouter(
    handler.dataRoutes,
    context
  );

  const helmetContext = {};

  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouterProvider
          router={router}
          context={context}
        />
      </Provider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <base href="/">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};