import React from 'react';
import Navbar from './Navbar';
import Intro from './home-components/Intro';

function Home() {
	return (
		<div id="home" className="homeSection hero section">
			<Navbar />
			<Intro />
		</div>
	);
}

export default Home;
