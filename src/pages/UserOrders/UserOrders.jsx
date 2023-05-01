import React from 'react';
import cl from './userOrders.module.css'
import { getAuth } from 'firebase/auth';
import useGetData from '../../hooks/useGetData';
import { Loader } from '../../componetns/UI/Loader/Loader';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import img from '../../assets/pngwing.com.png';

export const UserOrders = () => {
	const { data, loading } = useGetData('orders');
	const { currentUser } = getAuth();
	const orderValue = useSelector(state => state.reducerGetItem.makeOrder);

	return (
		<motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.content}>
			<div className={cl.content_top}>
				<h1 className={cl.title}>User Orders</h1>
				<span className={cl.subtitle}>{currentUser && currentUser.displayName}</span>
			</div>
			<div className={cl.user_orders}>

				{
					orderValue ?
						data.map((order) => (
							<>
								{
									loading ? <Loader /> :
										currentUser && order.displayName === currentUser.displayName &&
										<div key={order.id} className={cl.info_item}>
											<div className={cl.user_info}>
												<img src={order.userIMG} alt="ava" />
												<h5>{order.displayName}</h5>
											</div>
											<p>{order.order[0].title}</p>
											<div className={cl.order_info}>
												<span>${order.totalPrice}</span>
												<button className={order.orderStatus === 'Completed' ?
													cl.status + ' ' + cl.status_completed : cl.status &&
														order.orderStatus === 'Pending' ?
														cl.status + ' ' + cl.status_pending : cl.status &&
															order.orderStatus === 'Preparing' ?
															cl.status + ' ' + cl.status_preparing : cl.status
												} >
													{order.orderStatus}
												</button>
											</div>
										</div>
								}
							</>
						)) : <div className={cl.order_empty}>
							<h3>You <span>don't have</span> any orders</h3>
							<img src={img} alt="emoji" />
						</div>
				}
			</div>
		</motion.div>
	)
}
