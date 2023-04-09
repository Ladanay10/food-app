import React, { useState } from 'react';
import { StatsItem } from '../../componetns/UI/StatsItem/StatsItem';
import cl from './dashboard.module.css';
import icon1 from '../../assets/dashboardIcon1.svg';
import icon2 from '../../assets/dashboardIcon2.svg';
import icon3 from '../../assets/dashboardIcon3.svg';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import ava from '../../assets/Avatar 1.svg';
import { MostOrdered } from '../../componetns/MostOrdered/MostOrdered';
import { MostType } from '../../componetns/MostType/MostType';
import useGetData from '../../hooks/useGetData';
import { Loader } from '../../componetns/UI/Loader/Loader';
import { motion } from 'framer-motion';
export const Dashboard = () => {
	const date = new Date().toDateString();
	const { data: dataOrders, loading } = useGetData('orders');
	const { data: users } = useGetData('users');
	const [filterValue, setFilterValue] = useState('');
	const totalUser = users.length - 1;
	const totalOrders = dataOrders.length;
	const totalRevenue = dataOrders.map((item) => item.totalPrice).reduce((prev, next) => prev + next, 0);
	const orders = filterValue ? dataOrders.filter(item => item.orderStatus === filterValue) : dataOrders;
	return (
		<div className={cl.dashboard}>
			<motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.dashboard_content}>
				<div className={cl.dashboard_top}>
					<h1 className={cl.title}>Dashboard</h1>
					<span className={cl.date}>{date}</span>
				</div>
				<div className={cl.dashboard_stats}>
					<StatsItem
						icon={icon1}
						text={`$${totalRevenue}`}
						percent={'+32.40%'}
						arrow={arrowUp}
						subtext={'Total Revenue'}
					/>
					<StatsItem
						icon={icon2}
						text={totalOrders}
						percent={'-12.40%'}
						arrow={arrowDown}
						down
						subtext={'Total Dish Ordered'}
					/>
					<StatsItem
						icon={icon3}
						text={totalUser}
						percent={'+2.40%'}
						arrow={arrowUp}
						subtext={'Total Customer'}
					/>

				</div>
				<div className={cl.order_report}>
					<div className={cl.order_report_top}>
						<h2 className={cl.order_title}>
							Order Report
						</h2>
						<select
							className={cl.select}
							onChange={(e) => setFilterValue(e.target.value)}
						>
							<option value={''}>Filter Order</option>
							<option value="Completed">Complete</option>
							<option value="Preparing">Preparing</option>
							<option value="Pending">Panding</option>
						</select>
					</div>
					<div className={cl.order_table}>
						<li>Customer</li>
						<li>Menu</li>
						<li>Total Payment</li>
						<li>Status</li>
					</div>
					<div className={cl.order_info}>
						{
							loading ? <Loader /> :
								orders.length ?
									orders.map((order) => (
										<div key={order.id} className={cl.info_item}>
											<div className={cl.user_info}>
												<img src={!order.userIMG ? ava : order.userIMG} alt="ava" />
												<h5>{order.displayName}</h5>
											</div>
											<p>{order.order[0].title}</p>
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
									)) : <div>Now we don't have orders</div>
						}

					</div>
				</div>
			</motion.div>
			<motion.div initial={{ x: 300 }} animate={{ x: 0 }} className={cl.dashboard_right}>
				<MostOrdered />
				<MostType />
			</motion.div>
		</div>
	)
}
