import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Appointment from '../pages/Appointment';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/appointment" element={<Appointment />} />
		</Routes>
	);
}

export default App;
