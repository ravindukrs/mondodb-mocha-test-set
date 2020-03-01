const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser: true, useUnifiedTopology: true});


//Listen to Connection Open
mongoose.connection.once('open', function(){
    console.log("Connection Made");
}).on('error',function(error){
    console.log("Connection Error: ", error);
});

