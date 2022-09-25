const Libro = require('../models/Libro');



function getAllLibros(req, res){
    Libro.find({}).limit(100)
        .then(libros => {
            if(libros.length) return res.status(200).send({libros});
            return res.status(204).send({message: "Not content"})
        }).catch(error => res.status(500).send({error}))
}

function getshowLibros(req, res){
    // console.log(req.body.libros)
     let libros =req.body.libros
    if(req.body.error) return res.status(500).send({error});
    if(req.body.libros) return res.status(200).send(libros);
    return res.status(404).send({message: "Not Found"})
}

function createLibro(req, res){
    let libro = new Libro(req.body)
    libro.save().then(libro => res.status(201).send({libro}))
    .catch(error => res.status(500).send({error}));
}

function updateLibro(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.libros) return res.status(404).send({message: "Not found"});
    let libro = req.body.libros[0];
    libro = Object.assign(libro, req.body);
    libro.save().then(libro=> res.status(200).send({message: "Update", libro}))
    .catch(error=>res.status(500).send({error}));
}

function deleteLibro(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.libros) return res.status(404).send({message: "Not foud"});
    req.body.libros[0].remove().then(libro => res.status(200).send({message: "Delete item", libro}))
    .catch(error => res.status(500).send({error}));
}

function find(req,res, next){
    let query = {}
    query[req.params.key] = req.params.value
    Libro.find(query).then(libros =>{
        // console.log("respuesta:")
        // console.log(libros)
        if(!libros.length) return next();
        req.body.libros = libros;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}


module.exports =  {
    getAllLibros,
    getshowLibros,
    createLibro,
    updateLibro,
    deleteLibro,
    find
}