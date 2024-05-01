function fetchFromContact(pool) {
	return new Promise((resolve, reject) => {
		const query = 'SELECT * FROM Customer_Query';
		pool.query(query, (err, results) => {
			if (err) {
				console.error('Error fetching customer queries:', err);
				reject(err); // Reject the promise with the error
			} else {
				resolve(results); // Resolve the promise with the results
			}
		});
	});
}

module.exports = fetchFromContact;
