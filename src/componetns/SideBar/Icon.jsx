import React from 'react'
import cl from './sideBar.module.css';
import { NavLink } from 'react-router-dom';
export const Icon = ({ icon}) => {

	return (
		<NavLink
			className={({ isActive }) => isActive ? cl.active : cl.iconBlock}
			to={`${icon.src}`}>
			<div>{icon.img}</div>
		</NavLink>
	)
}
