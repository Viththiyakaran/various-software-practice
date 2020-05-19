const express = require('express');
const loginSession = require('./controller/loginSession');
const session = require('express-session');
const bodyParser = require('body-parser');
const app =	express();

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());     
app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.listen(process.env.PORT || 3000,() => {
	console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});


app.use('/',loginSession);