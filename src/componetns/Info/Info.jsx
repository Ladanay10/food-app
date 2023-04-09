import React from 'react';
import { FormSearch } from '../FormSearch/FormSearch';
import cl from './info.module.css';
import { SlBasket } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Info = () => {
	const date = new Date().toDateString();
	// const items = useSelector(state => state.reducerAddItem.basketItems);

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
			{/* <div className={cl.bakset_icon}>
					<div className={cl.basket_num}>
						<h4>{items.length}</h4>
					</div>
					<SlBasket size={23} />
				</div> */}

		</div>
	)
}
