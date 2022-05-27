const express = require("express");

const routes = express.Router();

// add
routes.get('/', (req, res) => {
    return res.send('Hello World2');
});

module.exports = routes;