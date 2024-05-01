import React from 'react';

function QueryInfo(props) {
	const { fetchedQueries } = props.fetchedData || {}; // Destructuring and handling null or undefined fetchedData
	return (
		<div className="info queryInfo">
			<p>Queries</p>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{fetchedQueries &&
						fetchedQueries.map((query) => (
							<tr key={query.query_id}>
								<td>{query.first_name}</td>
								<td>{query.last_name}</td>
								<td>{query.email}</td>
								<td>{query.customer_query}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default QueryInfo;
