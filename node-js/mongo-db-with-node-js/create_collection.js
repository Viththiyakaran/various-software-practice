const MongodbClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';



MongodbClient.connect( url, { useUnifiedTopology : true}, function(err , db){

    if(!err)
     console.log("Database Connected")

     var dbo = db.db('EmployeeDB');


     dbo.createCollection("customers", function(err , res){
         db.close();
     })
})