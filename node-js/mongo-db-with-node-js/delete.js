const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';


MongoClient.connect(url,{ useUnifiedTopology : true}, function(err, db){

        var dbo  = db.db("EmployeeDB");

        //var que = { name : "Kumar "};

        var que = { name : /^V/};


        //dbo.collection('customers').deleteOne(que,function(err,res){

        dbo.collection('customers').deleteMany(que,function(err,res){

            console.log(res.result.n   + " Deleted");
        })
});