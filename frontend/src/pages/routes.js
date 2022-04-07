import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {
	Login,
	Products,
} from '.';

const routes = () => (
	<BrowserRouter>
		<Routes>
			<Route element = { <Products /> } path="/" exact />
			<Route element = { <Login /> } path="/login" />
		</Routes>
	</BrowserRouter>
);

export default routes;
