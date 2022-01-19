const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // Create Transporter
  console.log('transporter', process.env.EMAIL_HOST, process.env.EMAIL_PORT, process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  //Define the email options
  const mailOptions = {
    from: 'Aviral Singh <aviralsingh108@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // Actually send the email
  await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;
