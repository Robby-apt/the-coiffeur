import React, { useState } from 'react';
const validator = require('email-validator');

function ContactForm() {
	const [formInput, setFormInput] = useState({
		fName: ``,
		lName: ``,
		email: ``,
		message: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setFormInput((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (validator.validate(formInput.email)) {
			let dataBody = JSON.stringify(formInput);

			try {
				const url = process.env.REACT_APP_BACKEND_PORT;
				let res = await fetch(url, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: dataBody,
				});
				// get status code
				if (res.status == 200) {
					alert(`The message has been sent successfully`);
					setFormInput({
						fName: ``,
						lName: ``,
						email: ``,
						message: ``,
					});
					console.log(formInput);
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
		<div className="contactFormSection topOverlay">
			<form onSubmit={handleSubmit} className="contactForm">
				<div
					className="appointmentName formSubDiv"
					style={{
						display: `flex`,
						flexDirection: `row`,
						margin: `0`,
						justifyContent: `space-between`,
					}}
				>
					<div className="firstName inputFieldDiv">
						<label htmlFor="contactFName">First Name</label>
						<input
							type="text"
							name="fName"
							id="contactFName"
							value={formInput.fName}
							onChange={handleChange}
							required
							minLength={2}
						/>
					</div>

					<div className="lastName inputFieldDiv">
						<label htmlFor="contactLName">Last Name</label>
						<input
							type="text"
							name="lName"
							id="contactLName"
							value={formInput.lName}
							onChange={handleChange}
							required
							minLength={2}
						/>
					</div>
				</div>

				<div className="emailInput">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formInput.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="messageInput">
					<label htmlFor="message">Message</label>
					<textarea
						type="text"
						name="message"
						id="message"
						rows="5"
						cols="50"
						value={formInput.message}
						onChange={handleChange}
						required
						minLength={5}
					/>
				</div>

				<button type="submit">SEND</button>
			</form>
		</div>
	);
}

export default ContactForm;
