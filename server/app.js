const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, CONNECTION_STRING } = require('./config');
const FileRouter = require('./modules/files/FileRouter');
const FolderRouter = require('./modules/folders/FolderRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/files/', FileRouter);
app.use('/folders/', FolderRouter);

mongoose
    .connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((connected) => {
        app.listen(PORT, () => console.log(`Working on ${PORT}`));
    });
