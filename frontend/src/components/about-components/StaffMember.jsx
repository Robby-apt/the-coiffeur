import React from 'react';

function StaffMember(props) {
	return (
		<div
			className="staffMember"
			style={{ backgroundImage: `url(${props.staffImg})` }}
		>
			<div className="nameBg">
				<p>{props.staffName}</p>
			</div>
		</div>
	);
}

export default StaffMember;
