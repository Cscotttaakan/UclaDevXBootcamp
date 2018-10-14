const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const request = require('request');

const binpath = path.resolve(__dirname, 'bin');
const apiServerHost = 'http://127.0.0.1:31337/api';

const serveFile = (app, filename) => {
  app.get('/' + filename, (req, res) => {
    res.sendFile(filename, {
      root: binpath,
    });
  });
};

function start(port) {
  const app = express();
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('dev'));

  app.use('/api', function(req, res) {  
    const url = apiServerHost + req.url;
    console.log(url);
    req.pipe(request(url)).pipe(res);
  });

  app.use(
    '/static',
    express.static('bin/static', {
      fallthrough: false,
      maxAge: 31536000000,
    }),
  );
  serveFile(app, 'manifest.json');
  app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
  });
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: binpath,
    });
  });

  app.listen(port);
}

start(3030);
