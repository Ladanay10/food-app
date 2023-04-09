import React, { useState } from 'react';
import { Button } from '../../componetns/UI/Button/Button';
import { auth, dataBase, storage } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RxFile } from 'react-icons/rx';
import cl from './register.module.css';
import { Input } from '../../componetns/UI/Input/Input';
import { toast } from 'react-toastify';
export const Register = () => {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordlValue] = useState('');
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const reg = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userCredetial = await createUserWithEmailAndPassword(auth, emailValue, passwordValue)
			const user = userCredetial.user;
			const storageRef = ref(storage, `images/${Date.now()}`);

			const uploadTask = uploadBytesResumable(storageRef, file)
			uploadTask.on((error) => {
				console.log(error.message);
				console.log(error);
			}, () => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					await updateProfile(user, {
						displayName: nameValue,
						photoURL: downloadURL
					});
					await setDoc(doc(dataBase, 'users', user.uid), {
						uid: user.uid,
						displayName: nameValue,
						emailValue,
						photoURL: downloadURL
					})
				})
			})
			setLoading(false);
			toast.success('Register was done!')
			navigate('/login')


		} catch (error) {
			setLoading(false)
			console.log(error.message);
			toast.error('Opps!', error.message);
		}
	}

	const handleChangeName = (e) => {
		setNameValue(e.target.value);
	}
	const handleChangeEmail = (e) => {
		setEmailValue(e.target.value);
	}

	const handleChangePassword = (e) => {
		setPasswordlValue(e.target.value);
	}
	const handleChangeFile = (e) => {
		setFile(e.target.files[0])
	}

	return (
		<div className={cl.register_page}>
			<h1 className={cl.title}>Register</h1>
			<form className={cl.form} onSubmit={reg}>
				<label>Name</label>
				<div className={cl.active_input}>
					<Input value={nameValue} onChange={handleChangeName} type="text" placeholder='Enter you name' />
					<HiOutlineUserCircle size={35} className={cl.icon} />
				</div>
				<label>Email</label>
				<div className={cl.active_input}>
					<Input value={emailValue} onChange={handleChangeEmail} type="email" placeholder='Enter you email' />
					<MdOutlineEmail size={35} className={cl.icon} />

				</div>
				<label>Password</label>
				<div className={cl.active_input}>
					<Input value={passwordValue} onChange={handleChangePassword} type="password" placeholder='Enter you password' />
					<RiLockPasswordLine size={35} className={cl.icon} />
				</div>
				<label>UserIMG</label>
				<div className={cl.active_input}>

					<Input onChange={handleChangeFile} type="file" placeholder='asdasd' />
					<RxFile size={35} className={cl.icon} />
				</div>
				<Button primary>Register</Button>
			</form>

			<p>Already have an account?
				<Link to={'/login'}>
					<span>Login</span>
				</Link>
			</p>
		</div>
	)
}

