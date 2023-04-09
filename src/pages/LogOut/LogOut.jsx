import React from 'react';
import cl from './logout.module.css';
import { auth } from '../../firebase';
import { Button } from '../../componetns/UI/Button/Button';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logOut from '../../assets/logOut.webp';
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
			<div className={cl.flex}>
				{currentUser &&
					<div className={cl.userInfo}>

						<span className={cl.user_name}>{currentUser.displayName}</span>
						<span className={cl.user_email}>{currentUser.email}</span>
						<img src={currentUser.photoURL} alt="photoUrl" />
						<Button primary onClick={handleLogOut} >LogOut</Button>

					</div>

				}
				<div className={cl.img}>
					<img src={logOut} alt="logout" />
				</div>
			</div>

		</div>

	)
}
