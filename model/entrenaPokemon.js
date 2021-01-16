const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrenaPokemonSchema = Schema({
  NoEntrenador: String,
  NoPokemon: String,
  Equipo: String,
  Inicio: String,
  Fin: String,
  
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('EntrenaPokemon', EntrenaPokemonSchema);