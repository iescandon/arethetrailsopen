var nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
	host: 'smtp.gmail.com',
	port: 465,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};

var transporter = nodemailer.createTransport(transport);

module.exports = transporter;
