import React from 'react';
import StaffMemberResponsive from './StaffMemberResponsive';
import { combinedStaff } from '../../staff';

function StaffResponsive() {
	return (
		<div
			id="carouselExampleDark"
			className="carousel carousel-dark slide staffSlideShow"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner innerSlide">
				{combinedStaff.map((item, index) => {
					return (
						<StaffMemberResponsive
							key={index}
							classList={item.classList}
							staffImg={item.staffImg}
							staffName={item.staffName}
						/>
					);
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default StaffResponsive;
