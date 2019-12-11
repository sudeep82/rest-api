'use strict'
var validator = require('validator');

module.exports.validateTemperature = function (req, res, next) {
    const tempUnit = ['celsius', 'fahrenheit', 'kelvin', 'rankine'];
    try {
        //let`s validate if the body is empty for POST calls
        if (req.method === 'POST' && req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: 'Invalid Request!! POST request missing body!!'
            });
        }

        if (req.method === 'POST') {
            //validate if initial unit and final unit is string
            if (!validator.isAlpha(req.body.initialUnit) && !validator.isAlpha(req.body.finalUnit)) {
                return res.status(400).send({
                    message: 'Invalid Request!! Initial and Final temperature needs to be string celsius,fahrenheit,kelvin or rankine !!'
                });

            }

            //validate if initial temperature and final temperature is number
            if (isNaN(req.body.initialTemperature) || isNaN(req.body.finalTemperature)) {
                return res.status(400).send({
                    message: 'Invalid Request!! Initial and Final temperature needs to be number !!'
                });

            }

            if(req.body.initialUnit === req.body.finalUnit){
                return res.status(400).send({
                    message: 'Invalid Request!! Source and Outcome units are same !!'
                });
            }

            if(!tempUnit.includes(req.body.initialUnit.toString().toLowerCase()) || !tempUnit.includes(req.body.finalUnit.toString().toLowerCase()) ){
                return res.status(400).send({
                    message: 'Invalid Request!! Initial Unit or final Unit does not look correct'
                });
            }


            if (!req.body.initialUnit || !req.body.initialTemperature || !req.body.finalTemperature || !req.body.finalUnit) {
                return res.status(400).send({
                    message: 'Invalid Request!! POST request missing body or !!'
                });
            }

        }
        // we want to make sure we want to go to the next routes
        next();
    }
    catch (err) {

        return res.status(400).send({
            message: err.message
        });
    }
}

module.exports.validateVolume = function (req, res, next) {

    const tempUnit = ['liters', 'cups', 'gallons', 'cubic-inch', 'cubic-feet', 'tbsp'];

    //let`s validate if the body is empty for POST calls
    if (req.method === 'POST' && req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: 'Invalid Request!! POST body cannot be empty!!'
        });
    }

    if (req.method === 'POST') {
        //validate if initial unit and final unit is string
        if (!validator.isAlpha(req.body.initialUnit) && !validator.isAlpha(req.body.finalUnit)) {
            return res.status(400).send({
                message: 'Invalid Request!! Initial and Final temperature needs to be string tbsp,gallons,cups,cubic-cubic-inch,feet or liters !!'
            });

        }

        //validate if initial temperature and final temperature is number
        if (isNaN(req.body.initialVolume) || isNaN(req.body.finalVolume)) {
            return res.status(400).send({
                message: 'Invalid Request!! Initial and Final volume needs to be number'
            });

        }

        if(req.body.initialUnit === req.body.finalUnit){
            return res.status(400).send({
                message: 'Invalid Request!! Source and Outcome units are same !!'
            });
        }

        if(!tempUnit.includes(req.body.initialUnit.toString().toLowerCase()) || !tempUnit.includes(req.body.finalUnit.toString().toLowerCase()) ){
            return res.status(400).send({
                message: 'Invalid Request!! Initial Unit or final Unit does not look correct'
            });
        }


        if (!req.body.initialUnit || !req.body.initialVolume || !req.body.finalVolume || !req.body.finalUnit) {
            return res.status(400).send({
                message: 'Invalid Request!! Please correct the key value in the Post body !!'
            });
        }

    }
    // we want to make sure we want to go to the next routes
    next();
}

module.exports.validateUnit = function (req, res, next) {

    const tempUnit = ['liters', 'cups', 'gallons', 'cubic-inch', 'cubic-feet', 'tbsp','celsius', 'fahrenheit', 'kelvin', 'rankine'];

    //let`s validate if the body is empty for POST calls
    if (req.method === 'POST' && req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: 'Invalid Request!! POST body cannot be empty!!'
        });
    }

    if (req.method === 'POST') {
        //validate if initial unit and final unit is string
        if (!validator.isAlpha(req.body.initialUnit) && !validator.isAlpha(req.body.finalUnit)) {
            return res.status(400).send({
                message: 'Invalid Request!! Initial and Final temperature needs to be string tbsp,gallons,cups,cubic-cubic-inch,feet,celsius,kelvin,rankine,fahrenheit or liters !!'
            });

        }

        //validate if initial unit number and final unit number is number
        if (isNaN(req.body.inputNumber) || isNaN(req.body.outputNumber)) {
            return res.status(400).send({
                message: 'Invalid Request!! Initial and Final output needs to be number'
            });

        }

        if(req.body.initialUnit === req.body.finalUnit){
            return res.status(400).send({
                message: 'Invalid Request!! Source and Outcome units are same !!'
            });
        }

        if(!tempUnit.includes(req.body.initialUnit.toString().toLowerCase()) || !tempUnit.includes(req.body.finalUnit.toString().toLowerCase()) ){
            return res.status(400).send({
                message: 'Invalid Request!! Initial Unit or final Unit does not look correct'
            });
        }


        if (!req.body.initialUnit || !req.body.inputNumber || !req.body.outputNumber || !req.body.finalUnit) {
            return res.status(400).send({
                message: 'Invalid Request!! Please correct the key value in the Post body !!'
            });
        }

    }
    // we want to make sure we want to go to the next routes
    next();
}