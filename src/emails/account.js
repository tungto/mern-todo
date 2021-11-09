const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log('process.env.SEND_GRID_API_KEY', process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail
		.send({
			to: email,
			from: 'toxtung@gmail.com',
			subject: 'Thank for joining in',
			text: `Welcome to the app, ${name}. Let me know how u get along with the app.`,
			// html: ''
		})
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
};

const sendCancelEmail = (email, name) => {
	sgMail.send({ to: email, from: 'toxtung@gmail.com', subject: 'Cancel email', text: 'Why are you trying to cancel' });
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail,
};
