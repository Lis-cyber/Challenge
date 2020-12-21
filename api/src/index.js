const express = require("express");
const server = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const routes = require('./routes/index.js');

server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use("/", routes);


server.listen(1337, console.log("Server listening at port 1337"));

module.exports = server;