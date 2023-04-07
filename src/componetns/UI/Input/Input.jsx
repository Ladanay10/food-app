import React from 'react';
import cl from './input.module.css';

export const Input = ({ ref, onChange, value, type, defaultValue, placeholder, small }) => {
	return (
		<input
			ref={ref}
			value={value}
			onChange={onChange}
			defaultValue={defaultValue}
			type={`${type}`}
			placeholder={`${placeholder}`}
			className={small ? cl.input + ' ' + cl.small : cl.input}
		/>
	)
}
