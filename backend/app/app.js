const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Libro = require('./routes/libro');  

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/libro', Libro);

module.exports = App;