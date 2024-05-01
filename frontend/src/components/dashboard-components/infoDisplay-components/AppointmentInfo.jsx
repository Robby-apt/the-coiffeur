import React from 'react';

function AppointmentInfo(props) {
	const { fetchedAppointments } = props.fetchedData || {}; // Destructuring and handling null or undefined fetchedData
	return (
		<div className="info appointmentInfo">
			<p>Appointments</p>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Date</th>
						<th>Time</th>
						<th>Type of Service</th>
					</tr>
				</thead>
				<tbody>
					{fetchedAppointments &&
						fetchedAppointments.map(
							(
								appointment // Conditional rendering for fetchedAppointments
							) => (
								<tr key={appointment.appointment_id}>
									<td>{appointment.fName}</td>
									<td>{appointment.lName}</td>
									<td>{appointment.phoneNumber}</td>
									<td>{appointment.email}</td>
									<td>{appointment.appointment_date}</td>
									<td>{appointment.appointment_time}</td>
									<td>{appointment.typeOfService}</td>
								</tr>
							)
						)}
				</tbody>
			</table>
		</div>
	);
}

export default AppointmentInfo;
