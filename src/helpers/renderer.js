import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
import { Provider } from 'react-redux';

import Routes from '../client/Routes';
import createFetchRequest from './request';
import createStore from './createStore';

let handler = createStaticHandler(Routes);

export default async (req, res) => {
  const store = createStore();

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

  const content = renderToString(
    <Provider store={store}>
      <StaticRouterProvider
        router={router}
        context={context}
      />
    </Provider>
  );

  return `
    <html>
      <head>
        <base href="/">
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};