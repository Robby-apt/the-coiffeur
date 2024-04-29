import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Appointment from '../pages/Appointment';
import EmployeeLogin from '../pages/EmployeeLogin';
import EmployeeDashboard from '../pages/EmployeeDashboard';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/appointment" element={<Appointment />} />
			<Route path="/employee" element={<EmployeeLogin />} />
			<Route path="/dashboard" element={<EmployeeDashboard />} />
		</Routes>
	);
}

export default App;
