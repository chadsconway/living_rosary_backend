const mailer = require('../helpers/mailer');

const nodemailer = require('nodemailer');



async function getTransporter() {
    const transporter = await nodemailer.createTransport();
    return transporter;
}
let transporterPromise = getTransporter();

let transporter = transporterPromise().then((resolve, reject) => {
    if (reject) {
        console.log(rejecct);
    }
    console.log(resolve);

});

let sendto = nodemailer.getTo('United States');
console.log(sendTo);
sendto = nodemailer.getTo('Mexico');
console.log(sendTo);
sendto = nodemailer.getTo('Caribbean');
console.log(sendTo);
sendto = nodemailer.getTo('Africa');
console.log(sendTo);
sendto = nodemailer.getTo('Europe');
console.log(sendTo);
sendto = nodemailer.getTo('South America');
console.log(sendTo);
sendto = nodemailer.getTo('Asia');
console.log(sendTo);
sendto = nodemailer.getTo('Antartica');
console.log(sendTo);
sendto = nodemailer.getTo('Canada');
console.log(sendTo);
sendto = nodemailer.getTo('Australia');
console.log(sendTo);
sendto = nodemailer.getTo('other');
console.log(sendTo);

let mailOptions = nodemailer.createMailOptions("agile4java@gmail.com", 'Please register me', 'Bob', 'Bobber', 'other', 'hello out there');

let sentInfo = nodemailer.sendEmail(transporter, mailOptions);

console.log("SendEmail replies: ", sentInfo);