const express = require('express');
const wreRoutes = require('./wre.routes.js');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('./Angular/dist/infomedia'));
app.use(wreRoutes);

module.exports = app;