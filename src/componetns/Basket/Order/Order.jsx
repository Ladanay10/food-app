import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../UI/Button/Button';
import cl from './order.module.css';

export const Order = ({ payment, setPayment }) => {
	const basketItem = useSelector(state => state.reducerAddItem.basketItems)
	const price = basketItem.map(value => value.price * 1).reduce((prev, curr) => prev + curr)
	const handleBuyProduct = () => {
		setPayment(true);
	}
	return (
		<div className={cl.order}>
			<div className={cl.order_content}>
				<p className={cl.text}>Discount</p>
				<span className={cl.price}>$0</span>
			</div>
			<div className={cl.order_content}>
				<p className={cl.text}>Sub total</p>
				<span className={cl.price}>${price}</span>
			</div>
			{
				payment ? <></> :
					<Button
						primary
						onClick={handleBuyProduct}
					>
						Continue to Payment
					</Button>
			}

		</div>
	)
}
