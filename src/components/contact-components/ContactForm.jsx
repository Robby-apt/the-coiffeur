import React, { useState } from 'react';

function ContactForm() {
	const [formInput, setFormInput] = useState({
		name: ``,
		email: ``,
		message: ``,
	});

	function handleChange(event) {
		let { name, value } = event.target;
		setFormInput((prev) => {
			return { ...prev, [name]: value };
		});
	}

	return (
		<div className="contactFormSection topOverlay">
			<form action="" className="contactForm">
				<div className="nameInput topInput">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={formInput.name}
						onChange={handleChange}
					/>
				</div>

				<div className="emailInput">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formInput.email}
						onChange={handleChange}
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
					/>
				</div>

				<button type="submit">SEND</button>
			</form>
		</div>
	);
}

export default ContactForm;
