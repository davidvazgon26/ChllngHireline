const express = require('express');
const LibroCtrl = require('../controllers/LibroController');

const Router = express.Router();

Router.get('/', LibroCtrl.getAllLibros)

Router.post('/', LibroCtrl.createLibro)

Router.get('/:key/:value',LibroCtrl.find, LibroCtrl.getshowLibros)

Router.put('/:key/:value', LibroCtrl.find, LibroCtrl.updateLibro)

Router.delete('/:key/:value', LibroCtrl.find, LibroCtrl.deleteLibro)

module.exports = Router;