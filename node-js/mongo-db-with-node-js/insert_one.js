const MongoDbClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/EmployeeDB';


MongoDbClient.connect( url, { useUnifiedTopology : true }, function (err , db){
    if(err)
    console.log("Database has problem");

    var dbo = db.db('EmployeeDB');

    var obj = [ 
        { name : 'Viththiyakaran ', address : 'Batticaloa'},
        { name : 'Raja ', address : 'Kandy'},
        { name : 'Kumar ', address : 'Colombo'}
    ];

   // dbo.collection('customers').insertOne(obj, function(err , res){

   dbo.collection('customers').insertMany(obj, function(err, res){
        if(!err)
        console.log("Data inserted " + res.insertedCount);
    });
});