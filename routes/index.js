var express = require('express');
// const { default: Instagram } = require('node-instagram');
// const { instagram } = require('../public/javascripts/key');
var router = express.Router();



//red social
router.get('/social', function(req, res, next) {
  res.render('pages/social', {page: 'Ubicacion', menuId:'ubicacion'});
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId:'home'});
});

//geolocslizacion
router.get('/ubicacion', function(req, res, next) {
  res.render('pages/ubicacion', {page: 'Ubicacion', menuId:'ubicacion'});
});


module.exports = router;
