const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');
const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // server.get('/static/themes/*', (req, res) => {
    //   const file = path.join(__dirname, req.originalUrl);
    //   if (fs.existsSync(file)) {
    //     res.send(file);
    //   } else {
    //     handle(req, res)
    //   }
    // });

    Router.forEachPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
      app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
    ));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
