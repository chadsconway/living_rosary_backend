// Controller for Router -> /mailer/register
exports.registerUser = async function(req, res) {
	console.log(req.body.firstName);
	console.log(req.body.lastName);
	console.log(req.body.userEmail);
	console.log(req.body.region);
	console.log(req.body.subject);
	console.log(req.body.note);
	const mailerHelper = require('../helpers/mailer');

	console.log(req.body);
	// hydrate user object for new registration
	let user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userEmail: req.body.userEmail,
		region: req.body.region,
		subject: req.body.subject,
		note: req.body.note
	};
	console.log(user);
	// get email address for region
	let sendTo = mailerHelper.getTo(user.region);

	// Test response
	res.json(user);

	// async calls to helper functions
	try {
		let transporter = await mailerHelper.getTransport();
		let mailOptions = await mailerHelper.createEmail(
			sendTo,
			user.subject,
			user.firstName,
			user.lastName,
			user.region,
			user.note
		);
		let results = await mailerHelper.sendEmail(transporter, mailOptions);
		return results;
	} catch (err) {
		return err;
	}
};
