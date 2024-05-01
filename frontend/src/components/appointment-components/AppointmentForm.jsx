import React, { useState } from 'react';
const validator = require('email-validator');

function AppointmentForm() {
	const [appointmentInput, setAppointmentInput] = useState({
		fName: ``,
		lName: ``,
		bookingEmail: ``,
		phoneNumber: ``,
		dateInput: ``,
		timeInput: ``,
		typeOfService: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setAppointmentInput((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (validator.validate(appointmentInput.bookingEmail)) {
			let dataBody = JSON.stringify(appointmentInput);

			try {
				const url = `${process.env.REACT_APP_BACKEND_PORT}/appointment`;
				let res = await fetch(url, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: dataBody,
				});
				// get status code
				if (res.status == 200) {
					alert(`The message has been sent successfully`);
					setAppointmentInput({
						fName: ``,
						lName: ``,
						phoneNumber: ``,
						bookingEmail: ``,
						dateInput: ``,
						timeInput: ``,
						typeOfService: ``,
					});
					console.log(appointmentInput);
				} else {
					alert(
						`Sorry, something went wrong when sending the message`
					);
				}
			} catch (err) {
				console.log(err);
			}
		} else {
			alert(`Kindly enter a valid email`);
		}
	}

	return (
		<div className="appointmentForm">
			<p className="formHeading">
				Book an appointment with us by filling the form below
			</p>

			<form onSubmit={handleSubmit} className="appointmentBookingForm">
				<div className="appointmentName formSubDiv">
					<div className="firstName inputFieldDiv">
						<label htmlFor="fName">First Name</label>
						<input
							type="text"
							name="fName"
							id="fName"
							value={appointmentInput.fName}
							onChange={handleChange}
							required
							minLength={2}
						/>
					</div>

					<div className="lastName inputFieldDiv">
						<label htmlFor="lName">Last Name</label>
						<input
							type="text"
							name="lName"
							id="lName"
							value={appointmentInput.lName}
							onChange={handleChange}
							required
							minLength={2}
						/>
					</div>
				</div>

				<div className="bookingEmail formSubDiv inputFieldDiv">
					<label htmlFor="bookingEmail">Email</label>
					<input
						type="email"
						name="bookingEmail"
						id="bookingEmail"
						value={appointmentInput.bookingEmail}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="phoneNumber formSubDiv inputFieldDiv">
					<label htmlFor="phoneNumber">Phone Number</label>
					<input
						type="text"
						name="phoneNumber"
						id="phoneNumber"
						value={appointmentInput.phoneNumber}
						onChange={handleChange}
						required
						minLength={10}
					/>
				</div>

				<div className="dateAndTime formSubDiv">
					<div className="dateInput inputFieldDiv">
						<label htmlFor="dateInput">Date</label>
						<input
							type="date"
							name="dateInput"
							id="dateInput"
							value={appointmentInput.dateInput}
							onChange={handleChange}
							required
						/>
					</div>

					<div className="time inputFieldDiv">
						<label htmlFor="timeInput">Time</label>
						<input
							type="time"
							name="timeInput"
							id="timeInput"
							value={appointmentInput.timeInput}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="typeOfServiceInput formSubDiv inputFieldDiv">
					<label htmlFor="typeOfService">Type of service</label>
					<select
						name="typeOfService"
						id="typeOfService"
						value={appointmentInput.typeOfService}
						onChange={handleChange}
						required
					>
						<option value=""></option>
						<option value="Hair and Beard products">
							Hair and Beard products
						</option>
						<option value="Beard trimming">Beard trimming</option>
						<option value="Hair trimming">Hair trimming</option>
						<option value="Hair braiding">Hair braiding</option>
						<option value="Manicure">Manicure</option>
						<option value="Pedicure">Pedicure</option>
						<option value="Make-up">Make-up</option>
						<option value="Hair dye">Hair dye</option>
					</select>
				</div>
				<button type="submit" className="appointmentBtn">
					Book <br /> Appointment
				</button>
			</form>
		</div>
	);
}

export default AppointmentForm;
