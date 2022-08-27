import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Appointment from '../pages/Appointment';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}>
					<Route index element={<Appointment />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
