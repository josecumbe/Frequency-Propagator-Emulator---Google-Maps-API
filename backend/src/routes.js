const express = require("express");

const routes = express.Router();

// add
routes.post('/receivers', (req, res) => {
    return res.send('Hello World2');
});

module.exports = routes;