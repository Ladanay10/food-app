import React from 'react';
import cl from './sideBar.module.css';
import { Icon } from './Icon';
import { navIcons } from '../../data/navIcons';
import { Logo } from '../UI/Logo/Logo';

export const SideBar = ({ isMobile, setIsMobile }) => {
	const handleChange = (e) => {
		e.preventDefault();
		setIsMobile(false);
	}
	return (
		<div className={isMobile ? cl.content + ' ' + cl.content_mobile : cl.content} onClick={handleChange}>
			<div className={cl.icons}>
				<Logo />
				{navIcons.map((icon) => (
					<Icon
						key={icon.id}
						icon={icon}
					/>
				))}
			</div>
		</div >
	)
}
