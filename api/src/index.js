const express = require("express");
const server = express();
var cors = require('cors');

const routes = require('./routes/index.js');
server.use(cors());
server.use("/", routes);

const port = process.env.PORT || 3000
server.listen( port , console.log(`Server listening at port ${port}`));

module.exports = server;