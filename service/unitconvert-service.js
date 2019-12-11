'use strict';

var unitRepo = require('../repositories/unitconversion');

module.exports.convertTemperature = function(req,res){
    var inputTemperature = req.body.initialTemperature;
    var inputUnit = req.body.initialUnit;
    var outputUnit = req.body.finalUnit;
    var studentResponse = req.body.finalTemperature;
    let result = unitRepo.convertTemperature(inputTemperature, inputUnit, outputUnit,studentResponse);
    let resultMessage = { 'output' : result};
    return res.status(200).send(resultMessage);

};

module.exports.convertVolume = function(req,res){
    var inputVolume = req.body.initialVolume;
    var inputUnit = req.body.initialUnit;
    var outputUnit = req.body.finalUnit;
    var studentResponse = req.body.finalVolume;
    let result = unitRepo.convertVolume(inputVolume, inputUnit, outputUnit,studentResponse);
    let resultMessage = { 'output' : result};
    return res.status(200).send(resultMessage);

};

module.exports.convertUnit = function(req,res){
    var inputNumber = req.body.inputNumber;
    var inputUnit = req.body.initialUnit;
    var outputUnit = req.body.finalUnit;
    var studentResponse = req.body.outputNumber;
    let result = unitRepo.convertUnit(inputNumber, inputUnit, outputUnit,studentResponse);
    let resultMessage = { 'output' : result};
    return res.status(200).send(resultMessage);

};