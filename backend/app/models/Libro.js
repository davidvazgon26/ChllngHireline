const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    "ISBN":{
        type: String,
        unique:true,
        require:true
    },
    "Book-Title":{
        type: String,
        unique:true,
        require:true
    },
    "Book-Author":{
        type: String,
        require:true
    },
    "Year-Of-Publication":{
        type: String,
        require:true
    },
    "Publisher":{
        type: String,
        require:true
    },
    "Image-URL-S":{
        type: String,
    },
    "Image-URL-M":{
        type: String,
    },
    "Image-URL-L":{
        type: String,
    }

    // Se puede cargar en las url por default una imagen default para evitar huecos en el front
});

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;