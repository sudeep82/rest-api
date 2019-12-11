const app = require('../server')

Object.assign(module.exports, {

            getTemperatureInput1 : function(){
                    return {
                        "initialTemperature" : 84.2,
                        "initialUnit" : "fahrenheit",
                        "finalUnit" : "rankine",
                        "finalTemperature" : 543.94
                    }

            },            
            getTemperatureInput2 : function(){
                return {
                    "initialTemperature" : 317.33,
                    "initialUnit" : "kelvin",
                    "finalUnit" : "fahrenheit",
                    "finalTemperature" : 111.554
                }
            },
            getVolumeInput1 : function(){
                return {
                    "initialVolume" : 25.6,
                    "initialUnit" : "cups",
                    "finalUnit" : "liters",
                    "finalVolume" : 6.1
                }
            },            
            getNegativeVolumeInput1 : function(){
                return {
                    "initialVolume" : 73.12,
                    "initialUnit" : "gallons",
                    "finalUnit" : "kelvin",
                    "finalVolume" : 19.4
                }
            },            
            getNegativeTemperatureInput1 : function(){
                return {
                    "initialTemperature" : 73.12,
                    "initialUnit" : "gallons",
                    "finalUnit" : "kelvin",
                    "finalTemperature" : 19.4
                }
            },
            getNegativeTemperatureInput2 : function(){
                return {
                    "initialTemperature" : 6.5,
                    "initialUnit" : "fahrenheit",
                    "finalUnit" : "rankine",
                    "finalTemperature" : "dog"
                }
            },
            getNegativeTemperatureInput3 : function(){
                return {
                    "initialTemperature" : 136.1,
                    "initialUnit" : "dog",
                    "finalUnit" : "celsius",
                    "finalTemperature" : 45.32
                }
            }

})