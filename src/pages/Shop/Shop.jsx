import React, { useState } from 'react';
import cl from './shop.module.css';
import { Info } from '../../componetns/Info/Info';
import { FilterBar } from '../../componetns/FilterBar/FilterBar';
import { Dishes } from '../../componetns/Dishes/Dishes';
import { Basket } from '../../componetns/Basket/Basket';
import { motion } from 'framer-motion';
import { IoBasketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
export const Shop = () => {
	const basketItems = useSelector(state => state.reducerAddItem.basketItems)
	const count = basketItems.length;
	const [isBasketActive, setIsBasketActive] = useState(false)
	return (
		<div className={cl.content}>
			<div className={cl.basket_icon}>
				<span>{count}</span>
				<IoBasketOutline size={25} color='#EA7C69' onClick={() => setIsBasketActive(!isBasketActive)} />
			</div>
			<motion.div
				initial={{ x: -100 }}
				animate={{ x: 0 }}
				className={cl.content_items}
			>
				<Info />
				<FilterBar />
				<Dishes />
			</motion.div>
			<motion.div
				className={isBasketActive ? cl.basket_content_active : cl.basket_content}
				initial={{ x: 100 }}
				animate={{ x: 0 }}
			>
				<Basket isBasketActive={isBasketActive} setIsBasketActive={setIsBasketActive} />
			</motion.div>
		</div>
	)
}
