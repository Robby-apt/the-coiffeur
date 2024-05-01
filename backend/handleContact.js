function handleContact(fName, lName, email, message, pool, res) {
	const query = `INSERT INTO Customer_Query (first_name, last_name, email, customer_query) VALUES (?, ?, ?, ?)`;
	const values = [fName, lName, email, message];

	pool.query(query, values, (err, result) => {
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
}

module.exports = handleContact;
