const express = require('express');
const router = express.Router();
const EntrenaPokemonSchema = require('../model/entrenaPokemon');


//Insercion de los datos
router.get('/', async (req, res) => {
  const EntrenaPokemon = await EntrenaPokemonSchema.find();
  res.render('entrenaPokemon', {
    EntrenaPokemon
  });
});
router.post('/add', async (req, res, next) => {
  const EntrenaPokemon = new EntrenaPokemonSchema(req.body);
  await EntrenaPokemon.save();
  //res.send("Se a agregado exitosamente!!");
  res.redirect('/entrenaPokemon');
});


//Edición de datos
router.get('/editEP/:id', async (req, res, next) => {
  const EntrenaPokemon = await EntrenaPokemonSchema.findById(req.params.id);
  console.log(EntrenaPokemon)
  res.render('./modificar/editEP', {EntrenaPokemon });
});

router.post('/editEP/:id', async (req, res, next) => {
  const { id } = req.params;
  await EntrenaPokemonSchema.update({_id: id}, req.body);
  //res.send("Se a editado exitosamente!!");
  res.redirect('/entrenaPokemon');
});

//Elimicación de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await EntrenaPokemonSchema.remove({_id: id});
  //res.send("Se a eliminado exitosamente!!");
  res.redirect('/entrenaPokemon');
});


module.exports = router;