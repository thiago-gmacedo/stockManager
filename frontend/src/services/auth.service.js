import axios from 'axios';
import apiEndpoints from '../utils/apiEndpoints';

const login = (username, password) => axios
	.get(apiEndpoints.auth.login, {
		params: {
			username,
			password,
		},
	});

export default {
	login,
};
