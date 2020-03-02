const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Finding Records', function(){

    beforeEach(function(done){
        var char = new MarioChar({
            name: 'Mario'
         });
         char.save().then(function(){
             done();
         });  
    });
    //Finding Tests
    it('Finds one record from the database', function(done){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });
    });
});
 