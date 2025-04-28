const myController = require('../controllers');

const routes = require('express').Router();

routes.get('/', myController.nameFunction);

module.exports = routes;