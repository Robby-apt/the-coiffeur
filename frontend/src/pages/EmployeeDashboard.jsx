import React, { useState } from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/dashboard-components/Sidebar';
import MainNav from '../components/dashboard-components/MainNav';
import InfoDisplay from '../components/dashboard-components/InfoDisplay';

function EmployeeDashboard() {
	const [isAppointmentsActive, setIsAppointmentsActive] = useState(true);
	const [isQueriesActive, setIsQueriesActive] = useState(false);
	const [isEmployeesActive, setIsEmployeesActive] = useState(false);

	// update state functions
	const activateAppointments = () => {
		setIsAppointmentsActive(true);
		setIsQueriesActive(false);
		setIsEmployeesActive(false);
	};

	const activateQueries = () => {
		setIsAppointmentsActive(false);
		setIsQueriesActive(true);
		setIsEmployeesActive(false);
	};

	const activateEmployees = () => {
		setIsAppointmentsActive(false);
		setIsQueriesActive(false);
		setIsEmployeesActive(true);
	};

	return (
		<div id="dashboard">
			<div className="mainBoard">
				<Sidebar
					isAppointmentsActive={isAppointmentsActive}
					isQueriesActive={isQueriesActive}
					isEmployeesActive={isEmployeesActive}
					activateAppointments={activateAppointments}
					activateQueries={activateQueries}
					activateEmployees={activateEmployees}
				/>
				<div className="mainDisplay">
					<MainNav />
					<InfoDisplay
						isAppointmentsActive={isAppointmentsActive}
						isQueriesActive={isQueriesActive}
						isEmployeesActive={isEmployeesActive}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default EmployeeDashboard;
