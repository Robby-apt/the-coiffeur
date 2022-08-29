import React from 'react';
import StaffMember from './StaffMember';
import { topStaff, bottomStaff } from '../../staff';

function Staff() {
	return (
		<div className="staffSection">
			<div className="topStaff">
				{topStaff.map((item, index) => {
					return (
						<StaffMember
							key={index}
							className={item.className}
							staffImg={item.staffImg}
							staffName={item.staffName}
						/>
					);
				})}
			</div>
			<div className="bottomStaff">
				{bottomStaff.map((item, index) => {
					return (
						<StaffMember
							key={index}
							className={item.className}
							staffImg={item.staffImg}
							staffName={item.staffName}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Staff;
