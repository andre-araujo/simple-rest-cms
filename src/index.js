const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
    MONGO_URL,
    APP_PORT,
} = require('./constants');

global.app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(
    MONGO_URL,
    {
        useMongoClient: true,
    },
);

app.listen(APP_PORT, () => {
    process.stdout.write(`> Ready on http://localhost:${APP_PORT}\n`);
});
