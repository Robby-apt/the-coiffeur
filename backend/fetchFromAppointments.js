function fetchFromAppointments(pool) {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM Appointments';
		pool.query(query, (err, results) => {
			if (err) {
				console.error('Error fetching appointments:', err);
				reject(err); // Reject the promise with the error
			} else {
				resolve(results); // Resolve the promise with the results
			}
		});
	});
}

module.exports = fetchFromAppointments;
