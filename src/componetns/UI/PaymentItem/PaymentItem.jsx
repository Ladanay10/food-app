import React, { useState } from 'react';
import cl from './paymentItem.module.css';
import checkMark from '../../../assets/checkmark.svg';
export const PaymentItem = ({ item }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			className={isActive ? cl.method_item + ' ' + cl.method_item_active : cl.method_item}
			onClick={() => setIsActive(!isActive)}
		>
			<img src={item.icon} alt="card" />
			<span>{item.title}</span>
			{
				isActive &&
				<img className={cl.check} src={checkMark} alt="check" />
			}
		</div>
	)
}
