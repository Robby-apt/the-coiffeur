import React from 'react';
import SidebarNav from './sidebar-components/SidebarNav';

function Sidebar(props) {
	return (
		<div className="sideBar">
			<SidebarNav />

			<div className="sideBarMenu">
				<div
					className="sideOption"
					onClick={props.activateAppointments}
					style={
						props.isAppointmentsActive
							? { backgroundColor: 'white' }
							: { backgroundColor: 'rgba(255, 255, 255, 0.6)' }
					}
				>
					<p>Customer Appointments</p>
				</div>
				<div
					className="sideOption"
					onClick={props.activateQueries}
					style={
						props.isQueriesActive
							? { backgroundColor: `white` }
							: { backgroundColor: `rgba(255, 255, 255, 0.6)` }
					}
				>
					<p>Customer Queries</p>
				</div>
				<div
					className="sideOption"
					onClick={props.activateEmployees}
					style={
						props.isEmployeesActive
							? { backgroundColor: `white` }
							: { backgroundColor: `rgba(255, 255, 255, 0.6)` }
					}
				>
					<p>Employee Details</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
