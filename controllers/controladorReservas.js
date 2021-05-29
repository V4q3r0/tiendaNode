const { request, response }=require('express');

const Reserva=require('../models/Reserva.js');

async function buscarUnaReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    let datosReserva = await Reserva.findById(id);

    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });
}

async function buscarReserva(peticion = request, respuesta = response)
{
    let datosReserva = await Reserva.find();

    respuesta.json({
        estado: true,
        mensaje: datosReserva
    });
}

async function agregarReserva(peticion = request, respuesta = response)
{
    let datosReserva = peticion.body;

    let reserva = new Reserva(datosReserva);
    await reserva.save();

    respuesta.json({
        estado: true,
        mensaje: "Reserva agregada con éxito!",
        datos: reserva
    });
}

async function editarReserva(peticion = request, respuesta = response)
{

    let id = peticion.params.id;
    let datosReserva = peticion.body;

    await Reserva.findOneAndUpdate(id, datosReserva);

    respuesta.json({
        estado: true,
        mensaje: "Datos actualizados!!"
    })
}

async function eliminarReserva(peticion = request, respuesta = response)
{
    let id = peticion.params.id;
    
    await Reserva.findByIdAndDelete(id);

    respuesta.json({
        estado: true,
        mensaje: "Datos eliminados!!"
    })
}

module.exports={
    buscarReserva,
    buscarUnaReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva
}