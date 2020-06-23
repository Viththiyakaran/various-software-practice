const express = require('express');
var request = require('request');
const app = express();
const port = 5000;

app.get('/',function(req, res){

    res.send('Hello world');
});

app.get('/newEndpoint',function(req, res){

    res.send('Hello world');
});

app.get('/getWeather', function(req,res){

    request('http://api.openweathermap.org/data/2.5/weather?q=colombo&appid=e25466752eb21d8c74cc930850c07137', function(error, response , body ){
        if(!error && response.statusCode == 200 )
        {
           var parseBody  = JSON.parse(body);
           var temp  = parseBody["main"]["temp"];
           res.send({temp});
        }
    });
});



app.listen(port,function(){
        console.log('Starting server')
});