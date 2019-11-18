const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/mycatalog';

//setup express app
const app = express();
const PORT = process.env.PORT || 4000;
//connect to mongodb

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(CONNECTION_URI, 
    { useNewUrlParser: true , useUnifiedTopology: true , useMongoClient: true});


app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for request
app.listen(PORT, function(){
console.log('now listening for request on', PORT);
});