// npm install --save express

const express = require('express');

const app  = express();

app.get('/', function(req, res ){
        res.send("Hello ! express server");
});

app.listen(3000);