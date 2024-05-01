import React from 'react';
import AppointmentInfo from './infoDisplay-components/AppointmentInfo';
import QueryInfo from './infoDisplay-components/QueryInfo';
import EmployeeInfo from './infoDisplay-components/EmployeeInfo';

function InfoDisplay(props) {
	const renderAccordingToState = () => {
		if (props.isAppointmentsActive) {
			return <AppointmentInfo fetchedData={props.fetchedData} />;
		} else if (props.isQueriesActive) {
			return <QueryInfo fetchedData={props.fetchedData} />;
		} else if (props.isEmployeesActive) {
			return <EmployeeInfo fetchedData={props.fetchedData} />;
		}
	};

	return <div className="infoDisplay">{renderAccordingToState()}</div>;
}

export default InfoDisplay;
