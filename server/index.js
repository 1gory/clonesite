import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {renderToString} from 'react-dom/server';
import {CookiesProvider} from 'react-cookie';
import path from 'path';
import fs from 'fs';
import './ignore-styles';
import App from '../src/app';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'static')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./api/copy').default);
app.use('/api', require('./api/order').default);

app.get('/*', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'main.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }

    const url = req.url;

    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={context}>
          <CookiesProvider cookies={req.universalCookies}>
            <App />
          </CookiesProvider>
        </StaticRouter>
      </StyleSheetManager>,
    );

    if (context.status === 404) {
      res.status(404);
    }

    const styleTags = sheet.getStyleTags();

    const RenderedApp = process.env.NODE_ENV === 'development' ?
      htmlData : htmlData
        .replace('<style id="serverStyleTags"></style>', styleTags)
        .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    ;

    res.send(RenderedApp);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});