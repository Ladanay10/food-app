import React from 'react';
import cl from './logout.module.css';
import { auth } from '../../firebase';
import { Button } from '../../componetns/UI/Button/Button';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export const LogOut = () => {
	const navigate = useNavigate();
	const { currentUser } = getAuth();
	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				navigate('/login')
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (

		<div className={cl.content}>
			<h1>LogOut</h1>
			<div className={cl.userInfo}>
				{
					currentUser &&
					<>
						<span>{currentUser.displayName}</span>
						<span>{currentUser.email}</span>
						<img src={currentUser.photoURL} alt="" />
					</>
				}
			</div>
			<Button primary onClick={handleLogOut} >LogOut</Button>
		</div>
	)
}
