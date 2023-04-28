import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Root } from './pages/Root';
import { Register } from './pages/Register/Register';


const App = () => {
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