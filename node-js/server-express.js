// npm install --save express

const express = require('express');

const app  = express();

//how to use public folder
app.use(express.static('public'));


// npm install --save ejs

app.set('view engine', 'ejs');
app.get('/', function(req, res ){
        res.send("Hello ! express server");
});


app.get('/about', function(req , res){
     res.send("This is about page");
});


app.get('/contact', function(req , res){
  res.send("This is contact page");
});

app.listen(3000);