// importing all dependecies for nodejs app, where I'll use be using nodemailer
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
//validating form input
const {check, validationResult} = require('express-validator');

const urlencodedParser = bodyParser.urlencoded({extended: false})


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
//this processes submitted data from a form and checks the condition of values
app.post('/send', urlencodedParser, [
    check('name', 'You must enter a name')
    .isLength({min:1}),
    check('email', 'Email is not valid')
    .isEmail()
    .normalizeEmail(),
    check('message')
    .isLength({min:2})
  ],(req,res) => {
    //if the errors array is not empty an error message is returned and rendered in 'main' file
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
    //  return res.status(422).jsonp(errors.array())
    const alert = errors.array()
    return res.render('main', {
      error:'Make sure, not only to include a valid email address, but to fill in the name and message field'
      
    })
    }
    //if there are no errors, the email is sent with this templated message
      const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `;
      //to connect to dotenv file where I'll create variables assigned to private information
      require('dotenv').config();
      //assigning variables to those from dotenv file, authorising email & password that will receive the message
      let passcode = process.env.password;
      let email = process.env.myEmail;
  
        // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: email, // generated ethereal user
        pass: passcode, // generated ethereal password
      },
      tls:{
          rejectUnauthorized:false
      }
    });
  
    // send mail with defined transport object
    let mailOptions = {
      from: '"Lucius Ramirez" <sam.l.zoro@live.com>', // sender address
      to: "sam.l.zoro@live.com", // list of receivers
      subject: "CONNECT", // Subject line
      text: "", // plain text body
      html: output // html body
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
    res.render('main', {msg:'Email has been sent'});
    })
  
  
  });

//the port the app is using
app.listen(3001, () => console.log('server started'));

