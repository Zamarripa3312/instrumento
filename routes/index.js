var express = require('express');
// const { default: Instagram } = require('node-instagram');
// const { instagram } = require('../public/javascripts/key');
var router = express.Router();
const EstudianteSchema = require('../public/javascripts/Estudiante');


//red social
router.get('/social', function(req, res, next) {
  res.render('pages/social', {page: 'Ubicacion', menuId:'ubicacion'});
});
//Otra API
router.get('/pokemon', function(req, res, next){
  res.render('pages/pokemon',{page: 'Pokemon', menuId:'pokemon'});
});
//Streaming
router.get('/streaming', function(req, res, ntext){
  res.render('pages/streaming',{page: 'Streaming', menuId:'streaming'});
});
//Registro
router.get('/registro', function(req, res, next){
  res.render('pages/registro',{page: 'Registro', menuId:'registro'});
});

//Insercion de los datos
router.get('/', async (req, res) => {
  const Estudiante = await EstudianteSchema.find();
  res.render('index', {
    Estudiante
  });
});
router.post('/add', async (req, res, next) => {
  const Estudiante = new EstudianteSchema(req.body);
  await Estudiante.save();
  res.redirect('/');
});

//Edición de datos
router.get('/edit/:id', async (req, res, next) => {
  const Estudiante = await EstudianteSchema.findById(req.params.id);
  console.log(Estudiante)
  res.render('edit', { Estudiante });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await EstudianteSchema.update({_id: id}, req.body);
  res.redirect('/');
});

//Elimicación de datos
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await EstudianteSchema.remove({_id: id});
  res.redirect('/');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId:'home'});
});

//geolocalizacion
router.get('/ubicacion', function(req, res, next) {
  res.render('pages/ubicacion', {page: 'Ubicacion', menuId:'ubicacion'});
});
//Paypal
router.get('/paypal', function(req, res, next) {
  res.render('pages/paypal', {page: 'Paypal', menuId:'paypal'});
});

module.exports = router;
