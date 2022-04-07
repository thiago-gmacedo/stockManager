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
	}).then(response => console.log('fodase', response))
	.catch(error => console.log('fodase', error.response.data));

export default {
	login,
};
