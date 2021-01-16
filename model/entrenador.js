const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrenadorSchema = Schema({
    NoEntrenador: String,
    Nombre: String,
    Descripcion: String,
    Region: String,
    Edad: String,

    status:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Entrenador', EntrenadorSchema);