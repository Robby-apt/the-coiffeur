import React, { useState } from 'react';

function Navbar() {
	const [isResNavShowing, setResNavShowing] = useState(false);

	let disableNav = () => {
		if (isResNavShowing === true) {
			setTimeout(() => {
				setResNavShowing(false);
			}, 20000);
		}
	};

	return (
		<nav>
			{disableNav()}
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

			<div className="navLinks">
				<a href="/#home">Home</a>
				<a href="/#services">Services</a>
				<a href="/#about">About Us</a>
				<a href="/#contact">Contact</a>
				<a href="/appointment" className="navCTA">
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
