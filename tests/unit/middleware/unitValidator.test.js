const sinon = require('sinon')
const chai = require('chai')
var testCase = require('mocha').describe
const assert = chai.assert
const expect = chai.expect
const app = require('../../../server')
const factory = require('../../model-factory')
let service = require('../../../service/unitconvert-service')
let validator = require('../../../middleware/unitValidator')
var unitRepo = require('../../../repositories/unitconversion')


testCase('Validators', function() {
    let sandbox;
    let temperatureinput1;
    let temperatureinput2;
    let spy;    
    let status , json, res;
    beforeEach(() => {
        sandbox = sinon.createSandbox()
        spy = sinon.spy()
        status = sinon.stub();
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
        })


    testCase('Testing Validators', () => {        
        it('validator test should work - happy path', function(){
            let inputVariable = factory.getTemperatureInput1()
            let req = {
                body:inputVariable
            };
            var res ;

            //call and verify

            try
            {
               return validator.validateTemperature(req, res, spy)
                
            }            
            catch(err){
                console.log("validator "+err.message)
                assert.equal(400 , err.statuscode , 'invalid request')
            }
        })
 })



})