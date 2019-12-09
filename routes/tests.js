const express = require('express');
const router = express.Router();

// route = /test/simple
router.get('/simple', (req, res) => {
	console.log('received request on route /test/simple');
	res.send("message: 'hello postman!'");
});

// route = /test/echoPostBody
router.post('/echopostbody', (req, res) => {
	console.log('recieved request on route /test/echoPostBody');
	// Create a Promise
	var responseBody = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		note: req.body.note,
		region: req.body.region
	};
	console.log('response body = ', responseBody);
	var responsePromise = new Promise(function(resolve, reject) {
		if (
			responseBody.firstName != 'undefined' &&
			responseBody.lastName != 'undefined' &&
			responseBody.userEmail != 'undefined' &&
			responseBody.subject != 'undefined' &&
			responseBody.region != 'undefined'
		) {
			resolve(responseBody);
		} else {
			var err = new Error('Request body not received properly');
			reject(err);
		}
	});
	var handleRequest = function() {
		responsePromise
			.then(function(fulfilled) {
				console.log('Promise resolved, reponse body: ', responseBody);
				res.status('200').json(responseBody);
			})
			.catch(function(error) {
				console.log('Promise rejected', responseBody);
				res.status('500').json({ error: 'Error Handling Request' });
			});
	};
	handleRequest();
});

router.post('/send', (req, res) => {
	const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>First Name: ${req.body.firstname}</li>
      <li>Last Name: ${req.body.lastname}</li>
      <li>Email: ${req.body.email}</li>
      <li>Region: ${req.body.region}</li>		
    </ul>
    <h3>Message</h3>
    <p>${req.body.note}</p>
	`;
	console.log('output ', output);
	//	res.json(output);

	// create reusable transporter object using the default SMTP transport

	// Uncomment:
	let transporter = nodemailer.createTransport({
		host: 'smtp.unoeuro.com',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: 'sender@thelivingrosaryapostolate.com', // generated ethereal user
			pass: 'Candysugar15' // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	let transporter2 = nodemailer.createTransport(options, defaults);

	// setup email data with unicode symbols

	// uncomment:
	let mailOptions = {
		from: 'sender@thelivingrosaryapotolate.com', // sender address
		to: 'admin@thelivingrosaryapostolate.com', // list of receivers
		subject: `New Registration Request: ${req.body.firstname} ${req.body.lastname}`, // Subject line
		// text: 'Hello world?', // plain text body
		html: output // html body
	};

	// send mail with defined transport object

	// uncomment:
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log(info);
		console.log(info.accepted);
		console.log(info.rejected);
		console.log(info.pending);
		console.log(response);
		console.log(info);
		console.log('Message sent: %s', info.messageId);
		// console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		console.log('Email send: ' + info.response);
		res.json('contact', { msg: 'Email has been sent' });
	});
});

module.exports = router;
