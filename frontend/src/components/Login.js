import React from 'react';
import {LoginContainer, LoginInput, LoginButton} from './Login.style';

function Login() {
	return (
		<LoginContainer>
			<LoginInput
				name="username"
				placeholder="Insira seu email"
			/>
			<LoginInput
				name="password"
				placeholder="Insira sua senha"
				type="password"
			/>
			<LoginButton
				onClick={() => console.log('clicou')}
			>
        Entrar
			</LoginButton>
		</LoginContainer>
	);
}

export default Login;
