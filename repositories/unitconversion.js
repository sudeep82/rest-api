var util = require('../util/unitConversionHandler');

module.exports = {
    //no need to use async or promise here in my opinion as it does not use much of any server or api or db requests
    convertTemperature: function(initialTemperature, initialUnit, finalUnit, finalTemperature){
        var result = "correct";
        var resultTemp;
        finalTemperature = Math.round(finalTemperature * 10)/10;
        switch(initialUnit.toString().toLowerCase()){
            case 'celsius':
                resultTemp = util.convertCelsius(initialTemperature, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10                
                result = resultTemp === finalTemperature ? 'correct' : 'incorrect';
            break;
            case 'fahrenheit':
                resultTemp = util.convertFahrenheit(initialTemperature, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === finalTemperature ? 'correct' : 'incorrect';
            break;
            case 'kelvin':
                resultTemp = util.convertKelvin(initialTemperature, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === finalTemperature ? 'correct' : 'incorrect';
            break;
            case 'rankine':
                resultTemp = util.convertRankine(initialTemperature, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === finalTemperature ? 'correct' : 'incorrect';
            break;
            default:
                result = 'invalid';
            break;
        }

        return result;

    },
    convertVolume: function(initialVolume, initialUnit, finalUnit, finalVolume){
        var result = "correct";
        var resultTemp;
        finalVolume = Math.round(finalVolume * 10)/10;
        switch(initialUnit.toString().toLowerCase()){
            case 'liters':
                resultTemp = util.convertLiters(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
            break;
            case 'tbsp':
                resultTemp = util.convertTbsp(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
            break;
            case 'cubic-inch':
                resultTemp = util.convertCubicInch(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
            break;
            case 'cups':
                resultTemp = util.convertCups(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
                break;
            case 'cubic-feet':
                resultTemp = util.convertCubicFeet(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
                break;
            case 'gallons':
                resultTemp = util.convertGallons(initialVolume, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === finalVolume ? 'correct' : 'incorrect';
                break;
            default:
                result = 'invalid';
            break;
        }

        return result;

    },
    convertUnit: function(inputNumber, initialUnit, finalUnit, outputNumber){
        var result = "correct";
        var resultTemp;
        outputNumber = Math.round(outputNumber * 10)/10;
        switch(initialUnit.toString().toLowerCase()){
            case 'liters':
                resultTemp = util.convertLiters(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
            break;
            case 'tbsp':
                resultTemp = util.convertTbsp(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
            break;
            case 'cubic-inch':
                resultTemp = util.convertCubicInch(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
            break;
            case 'cups':
                resultTemp = util.convertCups(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'cubic-feet':
                resultTemp = util.convertCubicFeet(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'gallons':
                resultTemp = util.convertGallons(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'celsius':
                resultTemp = util.convertCelsius(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10                
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'fahrenheit':
                resultTemp = util.convertFahrenheit(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'kelvin':
                resultTemp = util.convertKelvin(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            case 'rankine':
                resultTemp = util.convertRankine(inputNumber, finalUnit);
                resultTemp = Math.round(resultTemp * 10)/10  
                result = resultTemp === outputNumber ? 'correct' : 'incorrect';
                break;
            default:
                result = 'invalid';
            break;
        }

        return result;

    } 
}