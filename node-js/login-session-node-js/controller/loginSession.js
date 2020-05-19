const express = require('express');
const app =	express();

var sess; // global session, NOT recommended

app.get('/',(req,res) => {
	sess = req.session;
	if(sess.email) {
		return res.redirect('/admin');
	}
	res.render('login');
});

app.post('/login',(req,res) => {
	sess = req.session;
	sess.email = req.body.email;
	if(sess.email) {
		return res.redirect('/admin');
	}
	res.render('login');
});

app.get('/admin',(req,res) => {
	sess = req.session;
	if(sess.email) {
        res.render('home',  {
            title : sess.email
        });
	}
	else {
		res.render('login');
	}
});

app.get('/logout',(req,res) => {
	req.session.destroy((err) => {
		if(err) {
			return console.log(err);
		}
		res.redirect('/');
	});

});

module.exports = app;