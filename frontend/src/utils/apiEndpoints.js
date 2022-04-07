const HOST = 'http://localhost:3001';
export default {
	auth: {
		login: `${HOST}/auth/login`,
		register: '/auth/register',
	},
	product: {
		list: `${HOST}/product`,
	},
};
