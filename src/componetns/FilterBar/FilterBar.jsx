import React from 'react';
import cl from './filterBar.module.css';
import titleDishes from '../../data/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TYPE } from '../../store/types';
export const FilterBar = () => {
	const type = useSelector(state => state.reducerFilter.typeDish)
	const dispatch = useDispatch();

	const handleClick = (item) => {
		dispatch({ type: SET_TYPE, payload: item.foodTitle })

	}
	return (
		<>
			<ul className={cl.content} >
				{titleDishes.map((item) => (
					<li className={type === item.foodTitle ? cl.active + ' ' + cl.item : cl.item} onClick={() => handleClick(item)} key={item.id}>{item.foodTitle}</li>
				))}
			</ul>
		</>
	)
}
