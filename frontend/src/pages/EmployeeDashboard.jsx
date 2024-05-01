import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/dashboard-components/Sidebar';
import MainNav from '../components/dashboard-components/MainNav';
import InfoDisplay from '../components/dashboard-components/InfoDisplay';

function EmployeeDashboard() {
	const [isAppointmentsActive, setIsAppointmentsActive] = useState(true);
	const [isQueriesActive, setIsQueriesActive] = useState(false);
	const [isEmployeesActive, setIsEmployeesActive] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

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

	// fetching data from backend
	useEffect(() => {
		// Fetch data when the component mounts
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const url = `${process.env.REACT_APP_BACKEND_PORT}/dashboard`; // Corrected endpoint
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('There has been an error in fetching the data');
			}
			const jsonData = await response.json();
			setFetchedData(jsonData); // Set fetched data to state
			console.log(jsonData); // Log fetched data
		} catch (error) {
			console.error('Error fetching data:', error);
		}
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
					{/* Pass fetchedData as prop to InfoDisplay */}
					<InfoDisplay
						isAppointmentsActive={isAppointmentsActive}
						isQueriesActive={isQueriesActive}
						isEmployeesActive={isEmployeesActive}
						fetchedData={fetchedData} // Pass fetchedData as prop
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default EmployeeDashboard;
