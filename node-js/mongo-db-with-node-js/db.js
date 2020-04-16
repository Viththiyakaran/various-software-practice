const MongoClient = require('mongodb').MongoClient;

var url ='mongodb://localhost:27017/EmployeeDB';

MongoClient.connect( url, { useUnifiedTopology : true} , function(err , db){

        if(!err)
            console.log("Database Connected");

        db.close();
});