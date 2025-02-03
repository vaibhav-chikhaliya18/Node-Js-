const express = require('express');
const { viewProduct, addProduct } = require('../controllers/productController');

const routes = express.Router();

routes.get('/',viewProduct);
routes.get('/add',addProduct);

module.exports = routes;