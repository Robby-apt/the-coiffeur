require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 3001;

// import database insertion functions
const handleContact = require('./handleContact');
const handleBooking = require('./handleBooking');

// Configuring app dependencies
const appUsage = [
	bodyParser.urlencoded({ extended: true }),
	bodyParser.json(),
	cors(),
];

app.use(appUsage);

// MySQL connection
const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

// Handling data from contact form with prepared statements (replace with your chosen security approach)
app.post('/', (req, res) => {
	const { fName, lName, email, message } = req.body;
	console.log(req.body);

	handleContact(fName, lName, email, message, pool, res);
});

// Handling data from booking form with prepared statements (mysql library)
app.post('/appointment', (req, res) => {
	const {
		fName,
		lName,
		phoneNumber,
		bookingEmail,
		dateInput,
		timeInput,
		typeOfService,
	} = req.body;
	console.log(req.body);

	handleBooking(
		fName,
		lName,
		phoneNumber,
		bookingEmail,
		dateInput,
		timeInput,
		typeOfService,
		pool,
		res
	);
});

// Handling data from employee login form
app.post('/employee', (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);

	if (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_PASSWORD
	) {
		res.status(200).json({ message: 'Authentication successful' });
	} else {
		res.status(401).json({ error: 'Unauthorized access' });
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
