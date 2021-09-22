const express = require('express');
const { PORT } = require('./config');
const FileRouter = require('./modules/files/FileRouter');

const app = express();
app.use('/files/', FileRouter);

app.listen(PORT, () => console.log(`Working on ${PORT}`));
