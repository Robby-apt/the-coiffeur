import React from 'react';
import AppointmentInfo from './infoDisplay-components/AppointmentInfo';
import QueryInfo from './infoDisplay-components/QueryInfo';
import EmployeeInfo from './infoDisplay-components/EmployeeInfo';

function InfoDisplay(props) {
	const renderAccordingToState = () => {
		if (props.isAppointmentsActive) {
			return <AppointmentInfo />;
		} else if (props.isQueriesActive) {
			return <QueryInfo />;
		} else if (props.isEmployeesActive) {
			return <EmployeeInfo />;
		}
	};

	return <div className="infoDisplay">{renderAccordingToState()}</div>;
}

export default InfoDisplay;
