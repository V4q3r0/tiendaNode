const { Router }= require('express');

const { buscarReserva }= require('../controllers/controladorReservas.js');
const { agregarReserva }= require('../controllers/controladorReservas.js');
const { editarReserva }= require('../controllers/controladorReservas.js');
const { eliminarReserva }= require('../controllers/controladorReservas.js');
const { buscarUnaReserva }= require('../controllers/controladorReservas.js');

const { validarPeticion }= require('../validations/validaciones.js');

const { check }= require('express-validator');


let validaciones=Array(

    check('nombreCliente', "Este campo es obligatorio").not().isEmpty(),
    check('apellidoCliente', "Este campo es obligatorio").not().isEmpty(),
    check('telefonoCliente', "Este campo es obligatorio").not().isEmpty(),
    check('fechaInicio', "Este campo es obligatorio").not().isEmpty(),
    check('fechaFinal', "Este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas', "Este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete', "Este campo es obligatorio").not().isEmpty(),
    validarPeticion

);

const rutas=Router();


rutas.get('/reservas', buscarReserva);
rutas.get('/reservas/:id', buscarUnaReserva);
rutas.post('/reservas/nuevo', validaciones, agregarReserva);
rutas.put('/reservas/editar/:id', editarReserva);
rutas.delete('/reservas/eliminar/:id', eliminarReserva);

module.exports=rutas;