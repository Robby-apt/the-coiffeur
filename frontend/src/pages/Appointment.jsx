import React from 'react';
import NavBar from '../components/Navbar';
import AppointmentForm from '../components/appointment-components/AppointmentForm'
import Footer from '../components/Footer';

function Appointment() {
	return (
		<div id="home" className="homeSection hero section">
			<NavBar />
			<AppointmentForm/>
			<Footer />
		</div>
	);
}

export default Appointment;
