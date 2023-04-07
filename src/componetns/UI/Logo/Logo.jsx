import React from 'react'
import cl from './logo.module.css';
import logo from '../../../assets/nav-icon1.svg';
import { NavLink } from 'react-router-dom';
export const Logo = () => {

	return (
		<NavLink to={'/'} className={({ isActive }) => isActive ? cl.active + ' ' + cl.logo : cl.logo}>
			<img src={logo} alt="" />
		</NavLink >
	)
}
