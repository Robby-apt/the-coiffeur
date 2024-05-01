function handleBooking(
	fName,
	lName,
	phoneNumber,
	bookingEmail,
	dateInput,
	timeInput,
	typeOfService,
	pool,
	res
) {
	const query = `INSERT INTO Appointments (fName, lName, phoneNumber, email, appointment_date, appointment_time, typeOfService) VALUES (?, ?, ?, ?, ?, ?, ?)`;
	const values = [
		fName,
		lName,
		phoneNumber,
		bookingEmail,
		dateInput,
		timeInput,
		typeOfService,
	];

	pool.query(query, values, (err, result) => {
		if (err) {
			console.error('Error inserting data into Appointments table:', err);
			res.status(500).json({
				error: 'Error inserting data into Appointments table',
			});
		} else {
			console.log('Data inserted into Appointments table successfully');
			res.status(200).json({
				message: 'Data inserted into Appointments table successfully',
			});
		}
	});
}

module.exports = handleBooking;
