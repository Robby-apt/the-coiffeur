import React from 'react';
import StaffMember from './StaffMember';
import staff from '../../staff';

function Staff() {
	return (
		<div className="staffSection">
			{staff.map((item, index) => {
				return (
					<StaffMember
						key={index}
						staffImg={item.staffImg}
						staffName={item.staffName}
					/>
				);
			})}
		</div>
	);
}

export default Staff;
