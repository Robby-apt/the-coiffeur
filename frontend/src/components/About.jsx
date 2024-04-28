import React from 'react';
import Location from './about-components/Location';
import Staff from './about-components/Staff';
import StaffResponsive from './about-components/StaffResponsive';

function About() {
	return (
		<div id="about" className="section">
			<h1 className="sectionTitle">About us</h1>
			<div className="aboutParaContainer">
				<p className="aboutPara">
					The Coiffeur is a barber shop and salon that focuses on
					giving more than just a haircut, we offer an unforgetable
					experience.
					<br />
					We work closely with hair product manufucturers and training
					institutions to ensure our clients get the best service.
					<br />
					We are located in Real blank tower along Blank road opposite
					Near blank tower.
				</p>
			</div>
			<Location />
			<h3 className="sectionSubTitle">Meet our team</h3>
			<Staff />
			<StaffResponsive />
		</div>
	);
}

export default About;
