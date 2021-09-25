const express = require('express');
const mongoose = require('mongoose');

const { PORT, CONNECTION_STRING } = require('./config');
const FileRouter = require('./modules/files/FileRouter');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/files/', FileRouter);

mongoose
    .connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((connected) => {
        app.listen(PORT, () => console.log(`Working on ${PORT}`));
    });
