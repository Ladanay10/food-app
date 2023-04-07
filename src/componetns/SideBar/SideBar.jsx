import React from 'react';
import cl from './sideBar.module.css';
import { Icon } from './Icon';
import { navIcons } from '../../data/navIcons';
import { Logo } from '../UI/Logo/Logo';

export const SideBar = () => {

	return (
		<div className={cl.content}>
			<div className={cl.icons}>
				<Logo />
				{navIcons.map((icon) => (
					<Icon
						key={icon.id}
						icon={icon}
					/>
				))}
			</div>
		</div>
	)
}
