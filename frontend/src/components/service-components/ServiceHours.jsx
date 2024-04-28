import React from 'react';

function ServiceHours() {
	return (
		<div className="openingHours">
			<p className="serviceHoursIntro">
				Our opening hours are as follows:
			</p>
			<table>
				<thead>
					<tr>
						<th>Day</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Monday to Friday</td>
						<td> 9:00 am to 4:00 pm</td>
					</tr>
					<tr>
						<td>Saturday and Sunday</td>
						<td> 10:00 am to 3:00 pm</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ServiceHours;
