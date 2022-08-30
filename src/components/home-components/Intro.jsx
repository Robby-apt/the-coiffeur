import React from 'react';

function Intro() {
	return (
		<div className="introSection">
			<p className="introName">Welcome to The Coiffeur</p>
			<p className="slogan">More than just a haircut</p>
			<p className="introAbout">
				A hair grooming place for the few
				<br />
				with a more refined taste
			</p>
			<a href="/appointment" className="introCTA">
				Book an appointment
				<br />
				with a hairdresser
			</a>
		</div>
	);
}

export default Intro;
