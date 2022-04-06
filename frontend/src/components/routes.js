import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import Login from '../components/Login';

const routes = () => (
	<BrowserRouter>
		<Routes>
			<Route element = { <Login /> } path="/login" />
		</Routes>
	</BrowserRouter>
);

export default routes;
