require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 3001;

// Import database insertion functions
const handleContact = require('./handleContact');
const handleBooking = require('./handleBooking');

// Import functions for fetching data from daabase
const fetchFromAppointments = require('./fetchFromAppointments');
const fetchFromContact = require('./fetchFromContact');
const fetchFromEmployees = require('./fetchFromEmployees');

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

	if (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_PASSWORD
	) {
		res.status(200).json({ message: 'Authentication successful' });
	} else {
		res.status(401).json({ error: 'Unauthorized access' });
	}
});

// Fetch database info
app.get('/dashboard', async (req, res) => {
	try {
		let fetchedData = {
			fetchedAppointments: ``,
			fetchedQueries: ``,
			fetchedEmployees: ``,
		};

		// Fetch appointments, customer queries, and employees concurrently
		const appointmentsPromise = fetchFromAppointments(pool);
		const queriesPromise = fetchFromContact(pool);
		const employeesPromise = fetchFromEmployees(pool);

		// Wait for all promises to resolve
		const appointments = await appointmentsPromise;
		const customerQueries = await queriesPromise;
		const employees = await employeesPromise;

		// Assign fetched data to the fetchedData object
		fetchedData.fetchedAppointments = appointments;
		fetchedData.fetchedQueries = customerQueries;
		fetchedData.fetchedEmployees = employees;

		// Send data to the client
		res.json(fetchedData);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
