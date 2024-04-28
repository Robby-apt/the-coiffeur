import React from 'react';

function StaffMemberResponsive(props) {
	return (
		<div
			className={props.classList}
			style={{ backgroundImage: `url(${props.staffImg})` }}
		>
			<div className="nameBg">
				<p>{props.staffName}</p>
			</div>
		</div>
	);
}

export default StaffMemberResponsive;
