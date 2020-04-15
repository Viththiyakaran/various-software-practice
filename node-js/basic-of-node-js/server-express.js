// npm install --save express

const express = require('express');

const app  = express();

//how to use public folder
app.use(express.static('public'));


// npm install --save ejs

app.set('view engine', 'ejs');


app.get('/', function(req, res ){
  
        res.render('home');
});


app.get('/about', function(req , res){
     res.render('about');
});


app.get('/contact', function(req , res){
  res.render('contact');
});

app.listen(3000);