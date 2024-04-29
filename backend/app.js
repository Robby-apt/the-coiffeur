require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3001;

// config of app dependencies
const appUsage = [
	bodyParser.urlencoded({ extended: true }),
	bodyParser.json(),
	cors(),
];

app.use(appUsage);

// get data from contact form
app.post('/', (req, res) => {
	const { fName, lName, email, message } = req.body;
	console.log(req.body);
});

// get data from booking form
app.post('/appointment', (req, res) => {
	const {
		fName,
		lName,
		phoneNumber,
		email,
		dateInput,
		timeInput,
		typeOfService,
	} = req.body;
	console.log(req.body);
});

// get data from employee login form
app.post('/employee', (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`Hello from port ${port}`);
});
