const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const routes = express.Router();

routes.get('/register',registerUser);
routes.get('/',loginUser);

module.exports = routes;