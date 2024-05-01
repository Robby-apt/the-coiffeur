function fetchFromEmployees(pool) {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM Employee';
		pool.query(query, (err, results) => {
			if (err) {
				console.error('Error fetching employees:', err);
				reject(err); // Reject the promise with the error
			} else {
				resolve(results); // Resolve the promise with the results
			}
		});
	});
}

module.exports = fetchFromEmployees;
