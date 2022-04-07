import React, {useState} from 'react';
import {LoginContainer, LoginInput, LoginButton} from './Login.style';
import authService from '../services/auth.service';

function Login() {
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
				onClick={() => authService.login(loginInfo.username, loginInfo.password)}
			>
        Entrar
			</LoginButton>
		</LoginContainer>
	);
}

export default Login;
