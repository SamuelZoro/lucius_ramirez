// importing all dependecies for nodejs app, where I'll use be using nodemailer
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');



//initalise app variable
const app = express();

//templating engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// to make data in these folders usable 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/Fonts', express.static(path.join(__dirname, 'Fonts')));
app.use('/jquery', express.static(path.join(__dirname, 'jquery')));

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//route for where the app runs
app.get('/', (req, res) => {
    res.render('main');
});

//the port the app is using
app.listen(3001, () => console.log('server started'));
