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
		localStorage.setItem('token', response.data.token);
		return {token: response.data.token};
	})
	.catch(error => error.response.data);

export default {
	login,
};
