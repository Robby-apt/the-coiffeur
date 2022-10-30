import React, { useState } from 'react';
import Navbar from './Navbar';
import Intro from './home-components/Intro';

function Home() {
	const [isResNavShowing, setResNavShowing] = useState(false);

	return (
		<div id="home" className="homeSection hero section">
			<Navbar
				isResNavShowing={isResNavShowing}
				setResNavShowing={setResNavShowing}
			/>
			<Intro setResNavShowing={setResNavShowing} />
		</div>
	);
}

export default Home;
