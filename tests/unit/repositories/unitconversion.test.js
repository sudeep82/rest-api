const sinon = require('sinon')
const chai = require('chai')
var testCase = require('mocha').describe
const assert = chai.assert
const expect = chai.expect
const app = require('../../../server')
const factory = require('../../model-factory')
let service = require('../../../service/unitconvert-service')
var unitRepo = require('../../../repositories/unitconversion')

testCase('Repositories', function() {
    let sandbox;
    let temperatureinput1;
    let temperatureinput2;
    
    
    beforeEach(() => {
        sandbox = sinon.createSandbox()
        temperatureinput1 = factory.getTemperatureInput1()
    })


    testCase('Testing repositories', () => {
        // added this inspired by https://codewithhugo.com/express-request-response-mocking/ as i wanted to mock response as well
        const mockResponse = () => {
            const res = {};
            res.status = sinon.stub().returns(res);
            res.send = sinon.stub().returns(res);
            return res;
          };

        it('repo test should work', function(){
            let inputVariable = factory.getTemperatureInput1()
            let req = {
                body:inputVariable
            };
            var res = mockResponse();

            //call and verify

            try
            {
               return unitRepo.convertTemperature(inputVariable.inputUnit, inputVariable.inputTemperature, inputVariable.finalUnit, inputVariable.finalTemperature)
                
            }            
            catch(err){
                assert.equal(400 , err.statuscode , 'invalid request')
            }
        })

    })



})