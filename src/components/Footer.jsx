import React from 'react';

function Footer() {
	let currentDate = new Date();
	let year = currentDate.getFullYear();
	return (
		<footer className="footer">
			<p>
				Designed by <a href="#">Robin</a> &#169; {year} - All rights
				reserved.
			</p>
		</footer>
	);
}

export default Footer;
