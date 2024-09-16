const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const env = require('dotenv').config();

const app = express();

// Body-parser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your HTML and other assets)
app.use(express.static('public'));

// Route to handle form submission
app.post('/sendmessage', (req, res) => {
    const { name, email, message,number } = req.body;
    console.log(name, email, message,number)

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or any other email service provider
        auth: {
            user: "valdexrose@gmail.com", // Your email
            pass: "fkbr eiji zlzq wzak"
              // Your email password or App password
        }
    });

    const mailOptions = {
        from: email, // Sender's email address
        to: "valdexrose@gmail.com", // Your email address to receive the message
        subject: `New message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n${number}\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('An error occurred while sending the message.');
        } else {
            console.log('Message sent: ' + info.response);
            return res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
