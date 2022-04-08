import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RegisterContainer, RegisterInput, RegisterButton} from './Register.style';
import authService from '../services/auth.service';

function Register() {
	const navigate = useNavigate();
	const [registerInfo, setRegisterInfo] = useState({
		username: '',
		useremail: '',
		password: '',
	});

	const handleChange = e => {
		setRegisterInfo(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}),
		);
	};

	const handleRegister = async () => {
		console.log(registerInfo);
		const {payload} = await authService
			.register(registerInfo.username, registerInfo.useremail, registerInfo.password);
		if (payload.token) {
			navigate('/');
		}
	};

	return (
		<RegisterContainer>
			<RegisterInput
				name="useremail"
				placeholder="Insira seu email"
				value={registerInfo.email}
				onChange={handleChange}
			/>
			<RegisterInput
				name="username"
				placeholder="Insira seu nome"
				value={registerInfo.username}
				onChange={handleChange}
			/>
			<RegisterInput
				name="password"
				placeholder="Insira sua senha"
				type="password"
				value={registerInfo.password}
				onChange={handleChange}
			/>
			<RegisterButton
				onClick={handleRegister}
			>
        Registrar
			</RegisterButton>
		</RegisterContainer>
	);
}

export default Register;
