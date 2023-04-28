import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from '../../componetns/UI/Button/Button';
import { auth, dataBase, provider } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../componetns/UI/Input/Input';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { IoLogoGoogleplus } from 'react-icons/io'
import cl from './login.module.css';
import { doc, setDoc } from 'firebase/firestore';

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
	const loginWithGoogle = async (e) => {
		e.preventDefault();
		await signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setDoc(doc(dataBase, 'users', user.uid), {
					uid: user.uid,
					displayName: user.displayName,
					emailValue: user.email,
					photoURL: user.photoURL
				})
				toast.success('Login was done!');
				navigate('/');
			}).catch((error) => {
				const errorMessage = error.message;
				toast.error('Opps!', errorMessage);
			})
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
			<div onClick={loginWithGoogle} className={cl.login_google}>
				Or Sing Up using
				<div className={cl.login_googleIcon}>
					<IoLogoGoogleplus color='#EA7C69' size={20} />
					Login with Google
				</div>
			</div>
		</div>
	)
}

