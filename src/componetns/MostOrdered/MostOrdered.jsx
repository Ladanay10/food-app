import React from 'react';
import { Button } from '../UI/Button/Button';
import cl from './mostOrdered.module.css';
import img from '../../assets/dish1.svg';
export const MostOrdered = () => {
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
						<img src={img} alt="" />
						<div className={cl.item_info}>
							<h2>Spicy seasoned seafood noodles</h2>
							<p>200 dishes ordered</p>
						</div>
					</div>
					<div className={cl.item}>
						<img src={img} alt="" />
						<div className={cl.item_info}>
							<h2>Spicy seasoned seafood noodles</h2>
							<p>200 dishes ordered</p>
						</div>
					</div>
					<div className={cl.item}>
						<img src={img} alt="" />
						<div className={cl.item_info}>
							<h2>Spicy seasoned seafood noodles</h2>
							<p>200 dishes ordered</p>
						</div>
					</div>
				</div>
				<Button >View All</Button>
			</div>
		</>
	)
}
