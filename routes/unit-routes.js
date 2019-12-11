var express = require('express'),
    app = express(),
    routes = express.Router(),
    url = require('url'),
    config = require('../config/baseconfig'),
    middleware = require('../middleware/unitValidator'),
    service = require('../service/unitconvert-service');

routes.route('/temperature').post(service.convertTemperature );

routes.route('/volume').post(service.convertVolume );

module.exports = routes;