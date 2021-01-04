const express = require("express");
const server = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const routes = require('./routes/index.js');
// El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.
// CORS, que es un mecanismo de seguridad del navegador que evita hacer requerimientos desde un dominio o dirección que no está permitida por el servidor.
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use("/", routes);


server.listen(1337, console.log("Server listening at port 1337"));

module.exports = server;