import React, { useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button';
import cl from './mostOrdered.module.css';
import img from '../../assets/dish1.svg';
import img2 from '../../assets/dish2.svg';
import img3 from '../../assets/Image 4.png';
import useGetData from '../../hooks/useGetData';
export const MostOrdered = () => {
	const { data: dataOrders, loading } = useGetData('orders');

	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);
	useEffect(() => {
		for (let i = 0; i < dataOrders.length; i++) {
			const element = dataOrders[i];
			element.order.map((item) => item.title).forEach(element => {
				switch (element) {
					case 'Spicy seasoned seafood noodles':
						setCount1(prev => prev + 1);
						break;
					case 'Beef dumpling in hot and sour soup ':
						setCount2(prev => prev + 1);
						break;
					case 'Hot spicy fried rice with omelet':
						setCount3(prev => prev + 1);
						break;
					default:
						break;
				}
			});
		}
	}, [loading])

	return (
		<>
			<div className={cl.content}>
				<div className={cl.top_content}>
					<h1>Most Ordered</h1>
					<select className={cl.select}>
						<option >Filter</option>
						<option value="complete">Today</option>
						<option value="preparing">Last week</option>
						<option value="pending">Last mounth</option>
					</select>
				</div>
				<div className={cl.items}>
					<div className={cl.item}>
						<img src={img} alt="dish" />
						<div className={cl.item_info}>
							<h2>Spicy seasoned seafood noodles</h2>
							<p>{count1} dishes ordered</p>
						</div>
					</div>
					<div className={cl.item}>
						<img src={img2} alt="dish" />
						<div className={cl.item_info}>
							<h2>Beef dumpling in hot and sour soup</h2>
							<p>{count2} dishes ordered</p>
						</div>
					</div>
					<div className={cl.item}>
						<img src={img3} alt="dish" />
						<div className={cl.item_info}>
							<h2>Spicy seasoned seafood noodles</h2>
							<p>{count3} dishes ordered</p>
						</div>
					</div>
				</div>
				<Button >View All</Button>
			</div>
		</>
	)
}
