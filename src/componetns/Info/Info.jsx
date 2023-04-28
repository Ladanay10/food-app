import React from 'react';
import { FormSearch } from '../FormSearch/FormSearch';
import cl from './info.module.css';


export const Info = () => {
	const date = new Date().toDateString();

	return (
		<div className={cl.info}>
			<div className={cl.info_content}>
				<h1 className={cl.title}>
					Jaegar Resto
				</h1>
				<span className={cl.date}>
					{date}
				</span>
			</div>
			<FormSearch />
		</div>
	)
}
