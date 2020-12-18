const express = require("express");
const server = express();
const routes = require('./routes/Routes.js');
const bodyParser = require('body-parser');

app.use(express.json());
app.use("/", routes);

app.listen(1337, console.log("Server listening at port 1337"));

module.exports = server;