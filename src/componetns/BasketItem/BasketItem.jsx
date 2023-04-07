import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_NOTE, CHANGE_PRICE, DELETE_ITEM_IN_BASKET } from '../../store/types';
import { DeleteBtn } from '../UI/Button/DeleteBtn';
import { Input } from '../UI/Input/Input';
import cl from './basketItem.module.css';

export const BasketItem = ({ dish, }) => {
	const dispatch = useDispatch();
	const [noteValue, setNoteValue] = useState('');
	const handleChange = (e) => {
		dispatch({ type: CHANGE_PRICE, id: dish.id, quantity: e.target.value })
	}
	const handleDeleteItem = (dish) => {
		dispatch({ type: DELETE_ITEM_IN_BASKET, payload: dish.id })
	}
	const handleChangeNote = (e) => {
		setNoteValue(e.target.value);
	}
	useEffect(() => {
		dispatch({ type: ADD_NOTE, note: noteValue, id: dish.id })
	}, [noteValue])
	return (
		<div className={cl.basket_item}>
			<div className={cl.basket_item_top}>
				<div className={cl.item_top}>
					<div className={cl.item_top__info}>
						<img className={cl.img} src={dish.img} alt="" />
						<div className={cl.item_text}>
							<span>{dish.title}</span>
							<p>$ {dish.price}</p>
						</div>
					</div>
					<Input onChange={handleChange} small defaultValue={1} />
				</div>
				<Input onChange={handleChangeNote} className={cl.note} type="text" placeholder='Order Note...' />
			</div>
			<div className={cl.item_bottom}>
				<span>$ {dish.price} </span>
				<DeleteBtn dish={dish} onClick={() => handleDeleteItem(dish)} />
			</div>
		</div>
	)
}
