const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstudianteSchema = Schema({
  NumeroDeControl: String,
  Nombre: String,
  Apellidos: String,
  FechaDeNacimiento: String,
  Edad: String,
  CiudadDeNacimiento: String,

  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
