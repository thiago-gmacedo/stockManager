import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const data = localStorage.getItem('user');
	const payload = data ? JSON.parse(data).payload : null;

	useEffect(() => {
		if (!payload || !payload.token) {
			navigate('/login');
		}
	}, []);

	return (
		<div>
      Componente Header
		</div>
	);
};

export default Header;
