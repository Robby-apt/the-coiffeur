import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
	let disableNav = () => {
		props.setResNavShowing(false);
	};

	return (
		<nav>
			{/* {disableNav()} */}
			<div className="brand" onClick={()=> disableNav()}>
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
				<Link to="/">Home</Link>
				<a href="/#services">Services</a>
				<a href="/#about">About Us</a>
				<a href="/#contact">Contact</a>
				<Link to="/appointment" className="navCTA">
					Book an appointment
				</Link>
			</div>

			<div className="navIcons">
				{props.isResNavShowing ? (
					<i
						className="fa-solid fa-xmark"
						onClick={() => props.setResNavShowing(false)}
					/>
				) : (
					<i
						className="fa-solid fa-bars"
						onClick={() => props.setResNavShowing(true)}
					/>
				)}
			</div>

			<div
				className="navLinksResponsive"
				style={
					props.isResNavShowing
						? { display: 'flex' }
						: { display: 'none' }
				}
			>
				<a href="/#home">Home</a>
				<a href="/#services">Services</a>
				<a href="/#about">About Us</a>
				<a href="/#contact">Contact</a>
				<a href="/appointment" className="navCTA">
					Book an appointment
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
