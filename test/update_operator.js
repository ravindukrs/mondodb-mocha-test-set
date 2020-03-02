const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Updating Records', function(){
    var char;
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 50
         });
         char.save().then(function(){
             done();
         });  
    });
    //Finding Tests
    it('Update one record from the database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Louigi'}).then(function(){
             MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Louigi');
                done();
             });
        });
    }); 
    it('Increments the weight by one', function(done){
        MarioChar.updateMany({}, {$inc: {weight: 1}}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result.weight === 51);
                done();
            })
        })
    }); 

});
  