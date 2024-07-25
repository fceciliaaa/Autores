const express = require('express');
const autorController = require('../controllers/autor.controller');
const routerAutores = express.Router();

routerAutores.post('/nuevo/autor', autorController.crearAutor);
routerAutores.get('/autores', autorController.obtenerAutores);
routerAutores.put('/actualizar/autor/:id', autorController.modificarAutor);
routerAutores.delete('/eliminar/autor/:id', autorController.eliminarAutor);



module.exports = routerAutores;