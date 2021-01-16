const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = Schema({
  NoPokemon: String,
  Nombre: String,
  Descripcion: String,
  Ataque: String,
  Defensa: String,
  
  
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);