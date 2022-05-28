const express = require("express");
const ReceiverController = require("./controllers/ReceiverController.js")

const routes = express.Router();

// add
routes.post('/receivers', ReceiverController.store);

module.exports = routes;