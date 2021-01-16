const express = require('express');
const router = express.Router();
const PokemonSchema = require('../model/pokemonP');


//Insercion de los datos
router.get('/', async (req, res) => {
  const Pokemon = await PokemonSchema.find();
  res.render('pokemonP', {
    Pokemon
  });
  
});
router.post('/add', async (req, res, next) => {
  const Pokemon = new PokemonSchema(req.body);
  await Pokemon.save();
  res.send("Se a agregado exitosamente!!");
  res.redirect('/pokemonP');
});



//Edición de datos
router.get('/editP/:id', async (req, res, next) => {
  const Pokemon = await PokemonSchema.findById(req.params.id);
  console.log(Pokemon)
  res.render('./modificar/editP', { Pokemon });
});

router.post('/editP/:id', async (req, res, next) => {
  const { id } = req.params;
  await PokemonSchema.update({_id: id}, req.body);
  res.send("Se a editado exitosamente!!");
  res.redirect('/pokemonP');
});

//Elimicación de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await PokemonSchema.remove({_id: id});
  res.send("Se a eliminado exitosamente!!");
  res.redirect('/pokemonP');
});

module.exports = router;