import React from 'react';
import ServiceBg from './service-components/ServiceBg'
import ServiceList from './service-components/ServiceList'

function Services() {
	return (
		<div id="services" className="section">
			<h1 className="sectionTitle">Services</h1>
			<h3 className="sectionSubTitle">
				These are the services we provide.
			</h3>

			<ServiceBg/>
			<ServiceList/>
		</div>
	);
}

export default Services;
