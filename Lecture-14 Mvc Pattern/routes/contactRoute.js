const express = require('express');
const { viewContact, addContact } = require('../controllers/contactController');

const routes = express.Router();

routes.get('/',viewContact);
routes.get('/add',addContact);

module.exports = routes;