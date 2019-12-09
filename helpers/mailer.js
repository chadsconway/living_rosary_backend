module.exports = {
	getTransport: async function() {
		const nodemailer = require('nodemailer');
		const transporter = await nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'lra.mailer.1@gmail.com',
				pass: 'Candysugar15'
			}
		});
		return transporter;
	},
	getTo: function(region) {
		const zones = [
			{
				region: 'United States',
				to: 'frank'
			},
			{
				region: 'Canada',
				to: 'glenda'
			},
			{
				region: 'Mexico',
				to: 'frank'
			},
			{
				region: 'Caribbean',
				to: 'glenda'
			},
			{
				region: 'Africa',
				to: 'genevieve'
			},
			{
				region: 'Europe',
				to: 'glenda'
			},
			{
				region: 'South America',
				to: 'glenda'
			},
			{
				region: 'Asia',
				to: 'roger'
			},
			{
				region: 'Antartica',
				to: 'roger'
			},
			{
				region: 'Australia',
				to: 'roger'
			},
			{
				region: 'other',
				to: 'roger'
			},
			{
				region: 'test',
				to: 'chad'
			}
		];
		const addresses = {
			frank: 'frank.bonack@thelivingrosaryapostolate.com',
			genevieve: 'genevieve.mamai@livingrosaryapostolate.com',
			glenda: 'glendalafleur@thelivingrosaryapostolate.com ',
			roger: 'info@thelivingrosaryapostolate.com ',
			chad: 'admin@thelivingrosaryapostolate.com'
		};
		for (x in zones) {
			if (x.region === region) {
				let receiver = x.to;
				return addresses.receiver;
			} else {
				return 'error';
			}
		}
	},

	createMailOptions: function(to, subject, firstName, lastName, region, note) {
		let mailOptions = {
			from: 'lra.mailer.1@gmail.com',
			'this.to': to,
			'this.subject': subject,
			'this.text': `Name: ${firstName} ${lastName}
                 Region: ${region} 
                 Note:  ${note} `
		};
		return mailOptions;
	},

	sendEmail: function(transporter, mailOptions) {
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
				return error;
			} else {
				console.log('Email sent: ' + info.response);
				return info;
			}
		});
	}
};
