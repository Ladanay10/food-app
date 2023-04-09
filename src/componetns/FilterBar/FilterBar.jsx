import React from 'react';
import cl from './filterBar.module.css';
import titleDishes from '../../data/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TYPE } from '../../store/types';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { motion } from 'framer-motion';
import { BsFillPaletteFill } from 'react-icons/bs'
export const FilterBar = () => {
	const [isMobileActive, setIsMobileActive] = useState(false);
	const type = useSelector(state => state.reducerFilter.typeDish)
	const dispatch = useDispatch();

	const handleClick = (item) => {
		dispatch({ type: SET_TYPE, payload: item.foodTitle })
		setIsMobileActive(false);
	}
	return (
		<>
			<div className={cl.filter}>
				<Button
					primary
					onClick={() => setIsMobileActive(!isMobileActive)}
				>
					Filter Dish
					<BsFillPaletteFill />
				</Button>
			</div>
			<ul className={isMobileActive ? cl.content_mobile : cl.content} >
				{titleDishes.map((item) => (
					<li className={type === item.foodTitle ? cl.active + ' ' + cl.item : cl.item} onClick={() => handleClick(item)} key={item.id}>{item.foodTitle}</li>
				))}
			</ul>
		</>
	)
}
