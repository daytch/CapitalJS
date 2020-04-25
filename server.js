const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app = express();
const port = 8000;

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// require('./app/routes')(app,{});

// DB setup
const db = require('./config/db');
const dbName = 'data';
const collectionName = 'notes';

db.initialize(dbName,collectionName,function(dbCollection){
    // get all items
    
   dbCollection.find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
    });
    
    // CRUD routes
   require('./app/routes')(app,dbCollection);
},function(err){
    throw (err);
})

app.listen(port,()=> { 
    console.log('We are live on '+port);
});
