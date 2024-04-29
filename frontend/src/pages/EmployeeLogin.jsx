import React from 'react';
import NavBar from '../components/Navbar';
import LoginForm from '../components/login-components/LoginForm';
import Footer from '../components/Footer';

function EmployeeLogin() {
	return (
		<div id="home" className="homeSection hero section">
			<nav id="loginNav">
				<div className="brand">
					<a href="/employee">
						<img
							src="/images/logo.svg"
							alt="Brand Logo"
							className="brandLogo"
						/>
					</a>
					<a href="/employee">
						<p className="brandName">
							The
							<br />
							Coiffeur
						</p>
					</a>
				</div>
			</nav>
			<LoginForm />
			<Footer />
		</div>
	);
}

export default EmployeeLogin;
