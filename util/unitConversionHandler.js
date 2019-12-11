var _ = require('lodash');

function convertCelsius(initialTemp, finalTempUnit){
    var finalResult = 0;
    switch(finalTempUnit.toString().toLowerCase()){
        case 'fahrenheit':
            finalResult = (initialTemp * 1.8) + 32;
            break;
        case 'kelvin':
            finalResult = (initialTemp) + 273.15;
            break;
        case 'rankine':
            finalResult = initialTemp * 9/5 + 491.67;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertFahrenheit(initialTemp, finalTempUnit){
    var finalResult = 0;
    switch(finalTempUnit.toString().toLowerCase()){
        case 'celsius':
            finalResult = (initialTemp - 32) * 5/9;
            break;
        case 'kelvin':
            finalResult = (initialTemp - 32) * 5/9 + 273.15;
            break;
        case 'rankine':
            finalResult = initialTemp + 459.67;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertKelvin(initialTemp, finalTempUnit){
    var finalResult = 0;
    switch(finalTempUnit.toString().toLowerCase()){
        case 'celsius':
            finalResult = initialTemp - 273.15;
            break;
        case 'fahrenheit':
            finalResult = (initialTemp - 273.15) * 9/5 + 32;
            break;
        case 'rankine':
            finalResult = initialTemp * 1.8;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertRankine(initialTemp, finalTempUnit){
    var finalResult = 0;
    switch(finalTempUnit.toString().toLowerCase()){
        case 'celsius':
            finalResult = (initialTemp - 491.67) * 5/9;
            break;
        case 'fahrenheit':
            finalResult = initialTemp - 459.67;
            break;
        case 'kelvin':
            finalResult = initialTemp * 5/9;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertLiters(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'tbsp':
            finalResult = initialVol * 67.628;
            break;
        case 'cubic-inch':
            finalResult = initialVol * 61.024;
            break;
        case 'cups':
            finalResult = initialVol * 4.167;
            break;
        case 'cubic-feet':
            finalResult = initialVol/28.317;
            break;
        case 'gallons':
            finalResult = initialVol/3.785;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertTbsp(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'liters':
            finalResult = initialVol/67.628;
            break;
        case 'cubic-inch':
            finalResult = initialVol/1.108;
            break;
        case 'cups':
            finalResult = initialVol/16.231;
            break;
        case 'cubic-feet':
            finalResult = initialVol/1915.013;
            break;
        case 'gallons':
            finalResult = initialVol/256;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertCups(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'liters':
            finalResult = initialVol/4.167;
            break;
        case 'cubic-inch':
            finalResult = initialVol * 14.646;
            break;
        case 'tbsp':
            finalResult = initialVol * 16.231;
            break;
        case 'cubic-feet':
            finalResult = initialVol/117.987;
            break;
        case 'gallons':
            finalResult = initialVol/15.773;
            break;
        default:
            break;
    }
    return finalResult;
}


function convertCubicInch(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'tbsp':
            finalResult = initialVol * 1.108;
            break;
        case 'liters':
            finalResult = initialVol/61.024;
            break;
        case 'cups':
            finalResult = initialVol/14.646;
            break;
        case 'cubic-feet':
            finalResult = initialVol/1728;
            break;
        case 'gallons':
            finalResult = initialVol/231;
            break;
        default:
            break;
    }
    return finalResult;
}


function convertCubicFeet(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'tbsp':
            finalResult = initialVol * 1915.013;
            break;
        case 'liters':
            finalResult = initialVol * 28.317;
            break;
        case 'cups':
            finalResult = initialVol * 117.987;
            break;
        case 'cubic-inch':
            finalResult = initialVol * 1728;
            break;
        case 'gallons':
            finalResult = initialVol * 7.481;
            break;
        default:
            break;
    }
    return finalResult;
}

function convertGallons(initialVol, finalVolUnit){
    var finalResult = 0;
    switch(finalVolUnit.toString().toLowerCase()){
        case 'tbsp':
            finalResult = initialVol * 256;
            break;
        case 'liters':
            finalResult = initialVol * 3.785;
            break;
        case 'cups':
            finalResult = initialVol * 15.773;
            break;
        case 'cubic-inch':
            finalResult = initialVol * 231;
            break;
        case 'cubic-feet':
            finalResult = initialVol/7.481;
            break;
        default:
            break;
    }
    return finalResult;
}



module.exports.convertCelsius = convertCelsius;
module.exports.convertFahrenheit = convertFahrenheit;
module.exports.convertKelvin = convertKelvin;
module.exports.convertRankine = convertRankine;
module.exports.convertLiters = convertLiters;
module.exports.convertCubicFeet = convertCubicFeet;
module.exports.convertCubicInch = convertCubicInch;
module.exports.convertCups = convertCups;
module.exports.convertGallons = convertGallons;
module.exports.convertTbsp = convertTbsp;
