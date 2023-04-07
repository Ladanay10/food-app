import React from 'react';
import cl from './ordersManagment.module.css';
import useGetData from '../../hooks/useGetData';
import { Order } from './Order/Order';
import { Loader } from '../../componetns/UI/Loader/Loader';

export const OrdersManagment = () => {
	const { data, loading } = useGetData('orders');

	return (
		<div className={cl.content}>
			<div className={cl.top_bar}>
				<h2 className={cl.title2}>
					Orders Management
				</h2>
			</div>
			<div className={cl.table}>
				<div className={cl.table1}>
					<li>User</li>
					<li>Menu</li>
				</div>
				<div className={cl.table2}>
					<li>Total Price</li>
					<li>Status</li>
					<li>Action</li>
				</div>
			</div>
			<div className={cl.users}>

				{
					loading ? <Loader /> :
						data.length ?

							data.map((order, index) => (
								<Order
									key={index}
									order={order}
								/>
							)) : <h2>Now we don't have orders</h2>}
			</div	>

		</div>
	)
}
