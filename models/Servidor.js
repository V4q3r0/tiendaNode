const express = require('express');

const rutas= require('../routes/rutasReservas.js');

const {conectarDB}=require('../database/conexion.js');

const cors = require('cors');

class Servidor
{
    constructor()
    {
        this.app = express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();
    }

    despertarSevidor()
    {
        this.app.listen(process.env.PORT, function(){
            console.log(`Estoy conectado al puerto ${process.env.PORT}`);
        });
    }

    llamarRutasAPI()
    {
        this.app.use('/', rutas);
    }

    despertarBaseDatos()
    {
        conectarDB();
    }

    crearMiddlewares()
    {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }

}

module.exports=Servidor;