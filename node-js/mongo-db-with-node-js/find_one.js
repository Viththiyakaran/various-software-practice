const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';

MongoClient.connect(url, { useUnifiedTopology :true}, function(err, db){
    if(err)
     console.log("Database not conneted");

     var dbo  = db.db('EmployeeDB');

     //dbo.collection('customers').findOne({}, function(err, res){
         dbo.collection('customers').find({}).toArray(function(err, res){
            console.log(res);

            db.close();
        
        
     });
});