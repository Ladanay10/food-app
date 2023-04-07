import React from 'react';
import cl from './button.module.css';

export const Button = ({ type, value, primary, onClick, children, defaultV }) => {
	return (
		<button type={type} value={value} onClick={onClick} className={defaultV === children || primary ? cl.primary + ' ' + cl.btn : cl.btn
		}>
			{children}
		</button >
	)
}
