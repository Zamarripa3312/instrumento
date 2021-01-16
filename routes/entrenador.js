const express = require('express');
const router = express.Router();
const EntrenadorSchema = require('../model/entrenador');

//insercion de los datos
router.get('/', async(req, res) => {
    const Entrenador = await EntrenadorSchema.find();
    res.render('entrenador', {
        Entrenador
    });
   
});
router.post('/add', async(req, res, next) => {
    const Entrenador = new EntrenadorSchema(req.body);
    await Entrenador.save();
    console.log("agregado con exito");
    res.send("Se a agregado exitosamente!!");
    res.redirect('/entrenador');

});

//Edicion de datos
router.get('/editE/:id', async (req,res,next) => {
    const Entrenador = await EntrenadorSchema.findById(req.params.id);
    console.log(Entrenador);
    res.render('./modificar/editE', {Entrenador});
});
router.post('/editE/:id',async(req, res, next) => {
    const { id } = req.params;
    await EntrenadorSchema.update({_id: id}, req.body);
    res.send("Se a editado exitosamente!!");
    res.redirect('/entrenador');
})

//Eliminacion de los datos
router.get('/delete/:id', async(req, res, next) => {
    let { id } = req.params;
    await EntrenadorSchema.remove({_id: id});
    res.send("Se a eliminado exitosamente!!");
    res.redirect('/entrenador');
})

module.exports = router;