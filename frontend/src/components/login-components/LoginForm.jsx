import React, { useState } from 'react';

function LoginForm() {
	const [employeeLoginForm, setEmployeeLoginForm] = useState({
		username: ``,
		password: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setEmployeeLoginForm((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		let dataBody = JSON.stringify(employeeLoginForm);

		try {
			const url = `${process.env.REACT_APP_BACKEND_PORT}/employee`;
			let res = await fetch(url, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: dataBody,
			});
			// get status code
			if (res.status == 200) {
				alert(`Login successful! Redirecting to dashboard...`);
				setEmployeeLoginForm({
					name: ``,
					email: ``,
					message: ``,
				});
				window.location.href = '/dashboard'; // Redirect to dashboard page
			} else if (res.status == 401) {
				alert(`Kindly enter valid credentials`);
			} else {
				alert(`Sorry, something went wrong when sending the message`);
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="appointmentForm">
			<form onSubmit={handleSubmit} className="appointmentBookingForm">
				<h1>Employee Portal</h1>

				<div className="firstName inputFieldDiv formSubDiv">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={employeeLoginForm.username}
						onChange={handleChange}
						required
						minLength={2}
					/>
				</div>

				<div className="lastName inputFieldDiv formSubDiv">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={employeeLoginForm.password}
						onChange={handleChange}
						required
						minLength={2}
					/>
				</div>

				<button type="submit" className="appointmentBtn">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
