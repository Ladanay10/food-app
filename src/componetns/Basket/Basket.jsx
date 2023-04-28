import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import cl from './basket.module.css';
import { BasketItem } from '../BasketItem/BasketItem';
import { useSelector } from 'react-redux';
import { Table } from './Table/Table';
import { Order } from './Order/Order';
import { Payment } from '../Payment/Payment';
import { AiOutlinePlus } from 'react-icons/ai';
import { Skeleton } from '../UI/Skeleton/Skeleton';
import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
export const Basket = ({ isBasketActive, setIsBasketActive }) => {

	const dishesInBasket = useSelector(state => state.reducerAddItem.basketItems);
	const [value, setValue] = useState('');
	const [payment, setPayment] = useState(false)
	const handleClick = (e) => {
		setValue(e.target.value);
		e.preventDefault();
	}
	return (
		<>
			{
				payment && <div className={cl.eclipse}></div>
			}
			<div className={cl.content}>

				{dishesInBasket.length ? (
					<div className={cl.basket}>
						{
							payment ?
								<div className={cl.basket_info}>
									<div>
										<h1>Confirmation</h1>
										<p className={cl.number}>Orders #12313</p>
									</div>
									<button className={cl.btn_plus} onClick={() => setPayment(false)}>
										<AiOutlinePlus size={23} color='#fff' />
									</button>
								</div> :
								<>
									<div className={cl.basket_content}>
										<BiArrowBack
											color='#EA7C69'
											size={23}
											className={cl.icon}
											onClick={() => setIsBasketActive(false)}
										/>
										<h1>Your basket</h1>
										<form value={value} className={cl.btns}>
											<Button defaultV={value} onClick={handleClick} value={'Dine In'} >Dine In</Button>
											<Button defaultV={value} onClick={handleClick} value={'To Go'}>To Go</Button>
											<Button defaultV={value} onClick={handleClick} value={'Delivery'} >Delivery</Button>
										</form>
										<Table />
									</div>
								</>
						}

						<div className={payment ? cl.items_payment + ' ' + cl.items : cl.items}>
							{
								dishesInBasket.map((item) => (
									<BasketItem
										key={item.id}
										dish={item}
									/>
								))
							}
						</div>

						<Order setPayment={setPayment} payment={payment} />
					</div>
				) : <Skeleton skeletonBasket />}
				{
					payment && <Payment payment={payment} value={value} setPayment={setPayment} />
				}
			</div>

		</>
	)
}
