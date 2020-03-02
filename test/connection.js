const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to DB before test run
before(function (done) {
    //Connect to MongoDB
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

    //Listen to Connection Open
    mongoose.connection.once('open', function () {
        console.log("Connection Made");
        done();
    }).on('error', function (error) {
        console.log("Connection Error: ", error);
    });
});

//Drop the characters collection before each test
beforeEach(function(done){
    //Drop Collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});

