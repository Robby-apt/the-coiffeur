import React from 'react';

function AppointmentForm() {
	return (
		<div className="appointmentForm">
			<p className="formHeading">
				Book an appointment with us by filling the form below
			</p>

			<form action="" className="appointmentBookingForm">
				<div className="appointmentName formSubDiv">
					<div className="firstName inputFieldDiv">
						<label htmlFor="fName">First Name</label>
						<input type="text" name="fName" id="fName" />
					</div>

					<div className="lastName inputFieldDiv">
						<label htmlFor="lName">Last Name</label>
						<input type="text" name="lName" id="lName" />
					</div>
				</div>

				<div className="phoneNumber formSubDiv inputFieldDiv">
					<label htmlFor="phoneNo">Phone Number</label>
					<input type="text" name="phoneNo" id="phoneNo" />
				</div>

				<div className="dateAndTime formSubDiv">
					<div className="dateInput inputFieldDiv">
						<label htmlFor="date">Date</label>
						<input type="date" name="date" id="date" />
					</div>

					<div className="time inputFieldDiv">
						<label htmlFor="time">Time</label>
						<input type="time" name="time" id="time" />
					</div>
				</div>

				<div className="typeOfServiceInput formSubDiv inputFieldDiv">
					<label htmlFor="typeOfService">Type of service</label>
					<select
						name="typeOfServiceInputField"
						id="typeOfServiceInputOptions"
					>
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
