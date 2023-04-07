import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from '../../componetns/UI/Button/Button';
import cl from './login.module.css';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../componetns/UI/Input/Input';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
export const Login = () => {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordlValue] = useState('');
	const navigate = useNavigate();
	const handleChangeEmail = (e) => {
		setEmailValue(e.target.value);
	}

	const handleChangePassword = (e) => {
		setPasswordlValue(e.target.value);
	}

	const login = async (e) => {
		e.preventDefault()
		await signInWithEmailAndPassword(auth, emailValue, passwordValue)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				toast.success('Login was done!');
				navigate('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				toast.error('Opps!', errorMessage);

			});
	}
	return (
		<div className={cl.login_page}>
			<h1 className={cl.title}>Log In</h1>
			<form className={cl.form} onSubmit={login}>
				<label>Email</label>
				<div className={cl.active_input}>
					<Input value={emailValue} onChange={handleChangeEmail} type="email" placeholder='Enter you email' />
					<MdOutlineEmail size={35} className={cl.icon} />
				</div>

				<label >Password</label>
				<div className={cl.active_input}>
					<Input value={passwordValue} onChange={handleChangePassword} type="password" placeholder='Enter you password' />
					<RiLockPasswordLine size={35} className={cl.icon} />
				</div>
				<Button primary>Log In</Button>

			</form>
			<p>Don't have an account?
				<Link to={'/register'}>
					<span>Register</span>
				</Link>
			</p>
		</div>
	)
}

