const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailer');

router.post('/registeruser', mailController.registerUser);

module.exports = router;
