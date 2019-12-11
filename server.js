'use strict';

var express = require('express'),
    port = 3000,    
    service = require('./service/unitconvert-service'),
    middleware = require('./middleware/unitValidator'),
    routes = require('./routes');

var bodyParser = require('body-parser');

var swaggerUi = require('swagger-ui-express');



var app = express();
//for generating swagger docs
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = express.Router()

//router.use(middleware.validateTemperature);
//router.use(middleware.validateVolume);

router.get('/', function (req, res) {
    res.json({ result: 'Connected to API - After code review' })
})


router.route('/temperature').post(middleware.validateTemperature, service.convertTemperature)
router.route('/volume').post(middleware.validateVolume, service.convertVolume)
router.route('/unit').post(middleware.validateUnit, service.convertUnit)

app.use('/unit-api', router);


process.title = 'Unit Conversion Service';

//starting the server on port 3000
app.listen(port);
console.log('server starting on a port ' + port)