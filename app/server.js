'use strict';

import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './config/routes';
import path from 'path';
import NotFound from "./components/misc/NotFound.js"
import Router from 'react-router';
import { Server } from 'http';


const app = new Express();
const server = new Server(app);


app.use(Express.static(path.join(__dirname, 'ext')));


app.get('*', (req, res) => {
    match(
        {routes, location: req.url}, (err, redirectLocation, renderProps) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if(redirectLocation){
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }
            if(renderProps){
                res.status(200).send(renderToString(<RouterContext {...renderProps} />))
            } else {
                res.status(404).send("Not Found")
            }
        }
    )
})

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
