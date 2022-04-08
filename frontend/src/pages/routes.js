import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {
	Login,
	Products,
	Register,
} from '.';

const routes = () => (
	<BrowserRouter>
		<Routes>
			<Route element = { <Products /> } path="/" exact />
			<Route element = { <Login /> } path="/login" />
			<Route element = { <Register /> } path="/registro" />
		</Routes>
	</BrowserRouter>
);

export default routes;
