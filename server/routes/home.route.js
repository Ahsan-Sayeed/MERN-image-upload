const express = require('express');
const { getImage, postImage, errorRoute, serverError, deleteImage } = require('../controllers/home.controllers');
const { uploads } = require('../middlewares/multer');
const route = express.Router();

route.get('/',getImage);

route.post('/post',uploads,postImage);

route.delete('/',deleteImage);

route.use(errorRoute);

route.use(serverError);

module.exports = route;