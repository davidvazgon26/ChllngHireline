const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const App = express();

App.use(cors())

const Libro = require('./routes/libro');  

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/api', Libro);

module.exports = App;