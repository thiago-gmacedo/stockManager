import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginContainer, LoginInput, LoginButton} from './Login.style';
import authService from '../services/auth.service';

function Login() {
	const navigate = useNavigate();
	const [loginInfo, setLoginInfo] = useState({
		username: '',
		password: '',
	});

	const handleChange = e => {
		setLoginInfo(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}),
		);
	};

	const handleLogin = async () => {
		const login = await authService
			.login(loginInfo.username, loginInfo.password);
		if (login.token) {
			navigate('/');
		}
	};

	return (
		<LoginContainer>
			<LoginInput
				name="username"
				placeholder="Insira seu email"
				value={loginInfo.username}
				onChange={handleChange}
			/>
			<LoginInput
				name="password"
				placeholder="Insira sua senha"
				type="password"
				value={loginInfo.password}
				onChange={handleChange}
			/>
			<LoginButton
				onClick={() => handleLogin()}
			>
        Entrar
			</LoginButton>
		</LoginContainer>
	);
}

export default Login;
