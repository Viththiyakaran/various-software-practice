const Mongoclient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';

Mongoclient.connect(url,{useUnifiedTopology :true}, function(err, db){

    var dbo = db.db('EmployeeDB');

    var que = { address : /^C/ };

    var newval = { $set : 
                   {
                       address : "Batticaloa"
                    }
                };


    //dbo.collection('customers').updateOne(que,newval,function(err,res){
        dbo.collection('customers').updateMany(que,newval,function(err,res){


            console.log(res.result.nModified  + " document updated");
    });
});