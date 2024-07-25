const mongoose = require('mongoose');

const coleccionAutores = mongoose.Schema({
  nombre: {
    type: String, 
    required: [true, 'El campo nombre es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  }
}, { timestamps: true });

const Autores = mongoose.model('autores', coleccionAutores)

module.exports = Autores; 