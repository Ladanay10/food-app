import React, { useState } from 'react';
import cl from './shop.module.css';
import { Info } from '../../componetns/Info/Info';
import { FilterBar } from '../../componetns/FilterBar/FilterBar';
import { Dishes } from '../../componetns/Dishes/Dishes';
import { Basket } from '../../componetns/Basket/Basket';
export const Shop = () => {

	return (
		<div className={cl.content}>
			<div className={cl.content_items}>
				<Info />
				<FilterBar />
				<Dishes />
			</div>
			<div className={cl.basket_content}>
				<Basket />
			</div>
		</div>
	)
}
