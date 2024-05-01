import React from 'react';

function EmployeeInfo(props) {
	const { fetchedEmployees } = props.fetchedData || {}; // Destructuring and handling null or undefined fetchedData
	return (
		<div className="info employeeInfo">
			<p>Employees</p>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Role</th>
						<th>Bank</th>
						<th>Bank Account Number</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					{fetchedEmployees &&
						fetchedEmployees.map((employee) => (
							<tr key={employee.employee_id}>
								<td>{employee.first_name}</td>
								<td>{employee.last_name}</td>
								<td>{employee.phone}</td>
								<td>{employee.email}</td>
								<td>{employee.employee_role}</td>
								<td>{employee.bank}</td>
								<td>{employee.bank_account_number}</td>
								<td>{employee.salary}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default EmployeeInfo;
