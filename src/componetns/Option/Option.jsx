import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './option.module.css';

export const Option = ({ path, icon, title, desc }) => {
	return (
		<NavLink to={`${path}`} className={({ isActive }) => isActive ? cl.option + ' ' + cl.active__option : cl.option}>
			<span className={cl.icon}>  {icon}</span>
			<div className={cl.option__text}>
				<p>{title}</p>
				<span>{desc}</span>
			</div>
		</NavLink>
	)
}
