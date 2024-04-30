require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MySQL connection pool
const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

// Route for contact form submissions
app.post('/', (req, res) => {
	const { fName, lName, email, message } = req.body;
	const query =
		'INSERT INTO Customer_Query (first_name, last_name, email, customer_query) VALUES (?, ?, ?, ?)';
	pool.query(query, [fName, lName, email, message], (err, result) => {
		if (err) {
			console.error(
				'Error inserting data into Customer_Query table:',
				err
			);
			res.status(500).json({
				error: 'Error inserting data into Customer_Query table',
			});
		} else {
			console.log('Data inserted into Customer_Query table successfully');
			res.status(200).json({
				message: 'Data inserted into Customer_Query table successfully',
			});
		}
	});
});

// Route for booking form submissions
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
	const query =
		'INSERT INTO Appointments (fName, lName, phoneNumber, email, appointment_date, appointment_time, typeOfService) VALUES (?, ?, ?, ?, ?, ?, ?)';
	pool.query(
		query,
		[fName, lName, phoneNumber, email, dateInput, timeInput, typeOfService],
		(err, result) => {
			if (err) {
				console.error(
					'Error inserting data into Appointments table:',
					err
				);
				res.status(500).json({
					error: 'Error inserting data into Appointments table',
				});
			} else {
				console.log(
					'Data inserted into Appointments table successfully'
				);
				res.status(200).json({
					message:
						'Data inserted into Appointments table successfully',
				});
			}
		}
	);
});

// Route for employee login
app.post('/employee', (req, res) => {
	const { username, password } = req.body;

	console.log('Received username:', username);
	console.log('Received password:', password);

	// Check if username and password match the expected values
	if (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_PASSWORD
	) {
		// Authentication successful
		// Redirect to the dashboard page
		res.redirect('/dashboard');
	} else {
		// Authentication failed
		// Respond with an error message or status code indicating unauthorized access
		res.status(401).json({ error: 'Unauthorized access' });
	}
});

// Route for dashboard page
app.get('/dashboard', (req, res) => {
	// Render the dashboard page here or perform any necessary actions
	res.send('Welcome to the dashboard');
});

// Start the server
app.listen(port, () => {
	console.log(`Hello from port ${port}`);
});
