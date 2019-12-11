const router = require('express').Router();
const middleware = require('../middleware/unitValidator'),
      service = require('../service/unitconvert-service');


router.route('/temperature').post(middleware.validateTemperature, service.convertTemperature)
router.route('/volume').post(middleware.validateVolume, service.convertVolume)