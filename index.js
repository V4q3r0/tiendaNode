const Servidor= require('./models/Servidor.js');

require('dotenv').config();

let servidor= new Servidor();

servidor.despertarSevidor();
 