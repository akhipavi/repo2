var nodemailer = require('nodemailer');
var  express = require('express');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akhil@swaas.net',
    pass: 'akhipavi12'
  }
});

var mailOptions = {
  from: 'akhil@swaas.net',
  to: 'akhilsree42@gmail.com',
  subject: 'heyy......im Sending this dummy  Email using Node.js',
  text: 'something that i typed here to check my code'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
