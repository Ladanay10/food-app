import React from 'react';
import cl from './modal.module.css';

export const Modal = ({ active, setActive, children }) => {
	return (
		<div className={active ? cl.modal : cl.modal_invisible} onClick={() => setActive(false)}>
			<div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
