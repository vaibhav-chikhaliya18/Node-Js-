const express =  require('express');
const { viewBlog, addBlog } = require('../controllers/blogController');

const routes = express.Router();

routes.get('/',viewBlog);
routes.get('/add',addBlog);

module.exports = routes;