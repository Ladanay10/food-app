import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Select } from '../UI/Select/Select';
import { DishItem } from '../DishItem/DishItem';
import useGetData from '../../hooks/useGetData';
import { Loader } from '../UI/Loader/Loader';
import cl from './dishes.module.css';
import { Skeleton } from '../UI/Skeleton/Skeleton';


export const Dishes = () => {
	const type = useSelector(state => state.reducerFilter.typeDish)
	const place = useSelector(state => state.reducerFilter.place)
	const search = useSelector(state => state.reducerGetItem.searchValue);
	const { data, loading } = useGetData('dishes')
	const dishesItems = [...data].filter(value => search.length >= 1
		? value.title.toLowerCase().includes(search.toLowerCase())
		: (value.type === type && value.place === place)
	)
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
						) : <Skeleton skeletonSelect />
				}
			</div>
		</div>
	)
}
