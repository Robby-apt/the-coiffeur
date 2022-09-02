import React from 'react';

function Location() {
	return (
		<div className="locationDiv">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6372857905853!2d36.76188761542091!3d-1.3941293989832273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05e96c3433f7%3A0xb6620ac308ea3b90!2sMaasai%20Mall!5e0!3m2!1sen!2sin!4v1662107067413!5m2!1sen!2sin"
				style={{ border: 0 }}
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
}

export default Location;
