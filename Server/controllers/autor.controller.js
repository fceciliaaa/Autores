const Autores = require('../models/autor.model');


//Crear-Añadir nuevo autor
module.exports.crearAutor = (req, res)=> {
  const {nombre} = req.body

  if (!nombre){
    res.statusMessage = 'Por favor proporciona un nombre'
    return res.status(406).json({mensaje: 'Por favor proporciona un nombre'})
  }
  Autores.create({nombre})
    .then((nuevoAutor) => {
      return res.status(201).json(nuevoAutor);
    })
    .catch((error) => {
      res.statusMessage = error.message;
      return res.status(400).json(error.message);
  });
};


//Ver los autores
module.exports.obtenerAutores = (req, res)=>{
  Autores.find()
    .then((listaAutores) => {
      return res.status(200).json(listaAutores);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};


//Actualizar autor
module.exports.modificarAutor = (req, res) =>{
  const actualizarAutor = {};
  const {nombre} = req.body;
  
  if (nombre){
    actualizarAutor.nombre = nombre;
  }

  Autores.findByIdAndUpdate ({_id: req.params.id}, actualizarAutor, {new: true})
  .then((autorId)=>{
    return res.status(200).json(autorId)
  })
  .catch((error) => {
    res.statusMessage = error.message;
    return res.status(400).json(error.message);
  });
};

//Eliminar autor
module.exports.eliminarAutor = (req, res) => {
  Autores.findOneAndDelete({_id: req.params.id})
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
}