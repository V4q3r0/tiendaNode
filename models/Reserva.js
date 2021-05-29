const {model, Schema}=require('mongoose');

const reservaEsqueleto=Schema({
    nombreCliente:{
        type: String,
        required: true
    },
    apellidoCliente:{
        type: String,
        required: true
    },
    telefonoCliente:{
        type: String,
        required: true
    },
    fechaInicio:{
        type: String,
        required: true
    },
    fechaFinal:{
        type: String,
        required: true
    },
    numeroPersonas:{
        type: String,
        required: true
    },
    tipoPaquete:{
        type: String,
        required: true
    }
});

module.exports=model('Reserva', reservaEsqueleto);