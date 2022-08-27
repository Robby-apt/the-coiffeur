import React, { useState } from 'react';

function Navbar() {
	const [isResNavShowing, setResNavShowing] = useState(false);

	return (
		<nav>
			<div className="brand">
				<a href="#">
					<img
						src="/images/logo.svg"
						alt="Brand Logo"
						className="brandLogo"
					/>
				</a>
				<a href="#">
					<p className="brandName">
						The
						<br />
						Coiffeur
					</p>
				</a>
			</div>

			<div className="navLinks">
				<a href="#">Home</a>
				<a href="#">Services</a>
				<a href="#">About Us</a>
				<a href="#">Contact</a>
				<a href="#" className="navCTA">
					Book an appointment
				</a>
			</div>

			<div className="navIcons">
				{isResNavShowing ? (
					<i
						className="fa-solid fa-xmark"
						onClick={() => setResNavShowing(false)}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={() => setResNavShowing(true)}
					/>
				)}
			</div>

			<div
				className="navLinksResponsive"
				style={
					isResNavShowing ? { display: 'flex' } : { display: 'none' }
				}
			>
				<a href="#">Home</a>
				<a href="#">Services</a>
				<a href="#">About Us</a>
				<a href="#">Contact</a>
				<a href="#" className="navCTA">
					Book an appointment
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
