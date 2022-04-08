import axios from 'axios';
import apiEndpoints from '../utils/apiEndpoints';

const login = (username, password) => axios
	.get(apiEndpoints.auth.login, {
		headers: {
			Authorization: `Basic ${btoa(`${username}:${password}`)}`,
		},
	}, {
		auth: {
			username,
			password,
		},
	})
	.then(response => {
		const {payload: {token, user}} = response.data;
		localStorage.setItem('user', JSON.stringify({payload: {token, user}}));
		return response.data;
	})
	.catch(error => error.response.data);

export default {
	login,
};
