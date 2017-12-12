const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const next = require('next');
const fetch = require('isomorphic-unfetch');

const dev = process.env.NODE_ENV !== 'production';

const {
    MONGO_URL,
    APP_PORT,
} = require('./constants');

mongoose.Promise = global.Promise;

mongoose.connect(
    MONGO_URL,
    {
        useMongoClient: true,
    },
);

global.app = next({ dev });

app.prepare()
.then(() => {
    global.server = express();

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get('*', (req, res) => app.getRequestHandler()(req, res));

    server.listen(APP_PORT, () => {
        process.stdout.write(`> Ready on port ${APP_PORT}\n`);
    });
});

