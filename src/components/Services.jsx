import React from 'react';

function Services() {
	return (
		<div id="services" className="section">
			<h1 className="sectionTitle">Services</h1>
			<h3 className="sectionSubTitle">
				These are the services we provide.
			</h3>

			<div className="serviceBg">
				<div className="leftBg" />
				<div className="rightBg" />
			</div>
			<div className="serviceOverlay">
				<div className="serviceList">
					<p>Hair and Beard products</p>
					<p>Beard trimming</p>
					<p>Hair trimming</p>
					<p>Hair braiding</p>
					<p>Manicure</p>
					<p>Pedicure</p>
					<p>Make-up</p>
					<p>Hair dye</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
