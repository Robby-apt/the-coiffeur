import React from 'react';

function SidebarNav() {
	return (
		<div className="brand">
			<a href="/dashboard">
				<img
					src="/images/logo.svg"
					alt="Brand Logo"
					className="brandLogo"
				/>
			</a>
			<a href="/dashboard">
				<p className="brandName">
					The
					<br />
					Coiffeur
				</p>
			</a>
		</div>
	);
}

export default SidebarNav;
