const express = require('express');

const routes = express.Router();

routes.use('/crud',require('./crudRoute'))
// routes.use('/product',require('./productRoute'))
// routes.use('/blog',require('./blogRoute'))
// routes.use('/contact',require('./contactRoute'))

module.exports = routes;