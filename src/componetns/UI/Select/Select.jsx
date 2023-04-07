import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_PLACE } from '../../../store/types';
import cl from './select.module.css';

export const Select = () => {
	const dispatch = useDispatch();
	
	const handleChange = (e) => {
		dispatch({ type: SET_PLACE, place: e.target.value })
	}	
	return (
		<select className={cl.select} onChange={handleChange}>
			<option value="Dine In">Dine In</option>
			<option value="To Go">To Go</option>
			<option value="Delivery">Delivery</option>
		</select>
	)
}
