import React, { useEffect, useState } from 'react';
import cl from './mostType.module.css';
import circle from '../../assets/Circle.svg';
import useGetData from '../../hooks/useGetData';
export const MostType = () => {
	const { data: dataOrders, loading } = useGetData('orders');

	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	useEffect(() => {
		for (let i = 0; i < dataOrders.length; i++) {
			const element = dataOrders[i];
			switch (element.place) {
				case 'Dine In':
					setCount1(prev => prev + 1);
					break;
				case 'To Go':
					setCount2(prev => prev + 1);
					break;
				case 'Delivery':
					setCount3(prev => prev + 1);
					break;
				default:
					break;
			}
		}
	}, [loading])
	return (
		<>
			<div className={cl.content}>
				<div className={cl.top_content}>
					<h1>Most Type of Order</h1>
					<select className={cl.select}>
						<option >Filter</option>
						<option value="complete">Today</option>
						<option value="preparing">Last week</option>
						<option value="pending">Last mounth</option>
					</select>
				</div>
				<div className={cl.content_circle}>
					<img src={circle} alt="" />
					<div className={cl.info_items}>
						<div className={cl.item}>
							<div className={cl.item_circle}></div>
							<div className={cl.item_text}>
								<h4>Dine In</h4>
								<span>{count1} customers</span>
							</div>
						</div>
						<div className={cl.item}>
							<div className={cl.item_circle}></div>
							<div className={cl.item_text}>
								<h4>To Go</h4>
								<span>{count2} customers</span>
							</div>
						</div>
						<div className={cl.item}>
							<div className={cl.item_circle}></div>
							<div className={cl.item_text}>
								<h4>Delivery</h4>
								<span>{count3} customers</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
