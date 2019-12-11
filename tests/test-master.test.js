var sinon = require('sinon');
var chai = require('chai');
var testCase = require('mocha').describe

function importTest(path){
    testCase(path,function(){
        require(path)
    })
}

testCase('Simple Rest API Unit Conversion Test Suite', function() {

    importTest('./unit/service/unit-convert-service.test.js')
    importTest('./unit/repositories/unitconversion.test.js')
    importTest('./unit/middleware/unitValidator.test.js')

})