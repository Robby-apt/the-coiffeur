import React from 'react';

function Receipt(props) {
	// Destructure bookingDetails
	const {
		fName,
		lName,
		bookingEmail,
		phoneNumber,
		dateInput,
		timeInput,
		typeOfService,
	} = props.bookingDetails;

	// Function to print the receipt
	const printReceipt = () => {
		window.print(); // Print the receipt
	};

	const closeReceipt = () => {
		props.setIsFormSubmitted(false);
	};

	return (
		<div className="receipt">
			<h2>Booking Receipt</h2>
			<p>
				<strong>Name:</strong> {fName} {lName}
			</p>
			<p>
				<strong>Email:</strong> {bookingEmail}
			</p>
			<p>
				<strong>Phone Number:</strong> {phoneNumber}
			</p>
			<p>
				<strong>Date:</strong> {dateInput}
			</p>
			<p>
				<strong>Time:</strong> {timeInput}
			</p>
			<p>
				<strong>Type of Service:</strong> {typeOfService}
			</p>

			<div className="btnSection">
				<button onClick={printReceipt}>Print Receipt</button>
				<button onClick={closeReceipt}>Close</button>
			</div>
		</div>
	);
}

export default Receipt;
