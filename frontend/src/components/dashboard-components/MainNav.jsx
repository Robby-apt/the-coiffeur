import React from 'react';
import { Link } from 'react-router-dom';

function MainNav() {
	return (
		<nav>
			<h3>Welcome Admin</h3>
			<Link to="/employee">Logout</Link>
		</nav>
	);
}

export default MainNav;
