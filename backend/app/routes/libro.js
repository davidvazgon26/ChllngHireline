const express = require('express');
const LibroCtrl = require('../controllers/LibroController');

const Router = express.Router();

Router.get('/libros', LibroCtrl.getAllLibros)

Router.post('/create', LibroCtrl.createLibro)

Router.get('/search/:key/:value',LibroCtrl.find, LibroCtrl.getshowLibros)

Router.put('/update/:key/:value', LibroCtrl.find, LibroCtrl.updateLibro)

Router.delete('/delete/:key/:value', LibroCtrl.find, LibroCtrl.deleteLibro)

module.exports = Router;