import React from 'react';
import { useSelector } from 'react-redux';
import { Select } from '../UI/Select/Select';
import { DishItem } from '../DishItem/DishItem';
import useGetData from '../../hooks/useGetData';
import { Loader } from '../UI/Loader/Loader';
import cl from './dishes.module.css';


export const Dishes = () => {
	const type = useSelector(state => state.reducerFilter.typeDish)
	const place = useSelector(state => state.reducerFilter.place)
	const { data, loading } = useGetData('dishes')
	const dishesItems = [...data].filter(value => value.type === type && value.place === place)
	return (
		<div className={cl.content}>
			<div className={cl.top_content}>
				<h2 className={cl.title} >Choose Dishes</h2>
				<Select />
			</div>
			<div className={cl.dishes_items}>
				{
					loading ? <Loader /> :
						dishesItems.length ? (
							dishesItems.map((item) => (
								<DishItem
									key={item.id}
									dish={item}
								/>
							))
						) : <h1>Please, select other type of dish</h1>
				}
			</div>
		</div>
	)
}
