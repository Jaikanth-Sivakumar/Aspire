var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaikanthsivakumar@gmail.com',
    pass: 'Year@2003'
  }
});

var mailOptions = {
  from: 'jaikanthsivakumar@gmail.com',
  to: 'jaikanth.cs20@bitsathy.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'if you see this means, node mail is working!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});