import React from 'react';
import Home from '../components/Home'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

function Landing() {
	return (
		<>
        <Home/>
        <Services />
        <About />
        <Contact />
		</>
	);
}

export default Landing;
