import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Root } from './pages/Root';
import { Register } from './pages/Register/Register';
import useAuth from './hooks/useAuth';


const App = () => {
	const { currentUser } = useAuth()
	console.log(currentUser);
	return (
		<div className='container'>
			<Routes>
				<Route path='/' index element={<Navigate to={'home'} />}></Route>
				<Route path='*' element={<Root />} />
				<Route path='/login' index element={<Login />} />
				<Route path='/register' index element={<Register />} />
			</Routes>
		</div>
	)
}

export default App