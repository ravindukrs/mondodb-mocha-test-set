const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Deleting Records', function(){
    var char;
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
         });
         char.save().then(function(){
             done();
         });  
    });
    //Finding Tests
    it('Delete one record from the database', function(done){
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
             MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null);
                done();
             });
        });
    }); 

});
  