const Mongclient  = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';


Mongclient.connect(url,{ useUnifiedTopology : true}, function(err,res){

        var dbo = res.db("EmployeeDB");

        dbo.dropCollection("customers", function(err, DeleteDone){

            if(DeleteDone)
             console.log("Collection Deleted");
        });
});