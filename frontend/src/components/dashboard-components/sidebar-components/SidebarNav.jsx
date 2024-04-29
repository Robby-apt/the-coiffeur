import React from 'react';

function SidebarNav() {
	return (
		<div className="brand">
			<a href="/#home">
				<img
					src="/images/logo.svg"
					alt="Brand Logo"
					className="brandLogo"
				/>
			</a>
			<a href="/#home">
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
