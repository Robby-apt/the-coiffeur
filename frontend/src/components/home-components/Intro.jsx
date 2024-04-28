import React from 'react';
import { Link } from 'react-router-dom';

function Intro(props) {
	return (
		<div
			className="introSection"
			onClick={() => {
				props.setResNavShowing(false);
			}}
		>
			<p className="introName">Welcome to The Coiffeur</p>
			<p className="slogan">More than just a haircut</p>
			<p className="introAbout">
				A hair grooming place for the few
				<br />
				with a more refined taste
			</p>
			<Link to="/appointment" className="introCTA">
				Book an appointment
			</Link>
		</div>
	);
}

export default Intro;
