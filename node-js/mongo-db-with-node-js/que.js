const MongoClinet = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';

MongoClinet.connect(url,{ useUnifiedTopology : true},function(err,db){

        var dbo = db.db("EmployeeDB");

        //var que  = { name : /^K/};

        var mysort = { address : 1};

        dbo.collection("customers").find().sort(mysort).toArray(function(err,res){

                console.log(res);

                db.close();
        });
});