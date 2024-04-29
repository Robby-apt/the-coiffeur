import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './navbar-components/Brand';

function Navbar(props) {
	let disableNav = () => {
		props.setResNavShowing(false);
	};

	return (
		<nav>
			<Brand disableNav={disableNav} />

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
				<Link to="/appointment" className="navCTA">
					Book an appointment
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
