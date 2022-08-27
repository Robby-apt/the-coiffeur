import React from 'react';

function About() {
	return (
		<div id="about" className="section">
			<h1 className="sectionTitle">About us</h1>
			<p className="aboutPara">
				The Coiffeur is a barber shop and salon that focuses on giving
				more than just a haircut, we offer an unforgetable experience.
				<br />
				We work closely with hair product manufucturers and training
				institutions to ensure our clients get the best service.
				<br />
				We are located in Real blank tower along Blank road opposite
				Near blank tower.
			</p>
			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.806499001447!2d36.814394715420605!3d-1.2903934990588277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10db1737160d%3A0xa80e474be4afaf5d!2sUhuru%20Park!5e0!3m2!1sen!2sin!4v1661603043716!5m2!1sen!2sin"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/> */}
			<h3 className="sectionSubTitle">Meet our team</h3>
		</div>
	);
}

export default About;
