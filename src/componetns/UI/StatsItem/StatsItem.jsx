import React from 'react';

import cl from './statsItem.module.css';
export const StatsItem = ({ down, icon, subtext, arrow, percent, text }) => {
	return (
		<div className={cl.stats_item}>
			<div className={cl.stats_item_top}>
				<div className={cl.stats_item_top_icon}>
					<img src={icon} alt="icon" />
				</div>
				<span className={down ? cl.percent_red + ' ' + cl.percent : cl.percent}>{percent}</span>
				<img src={arrow} alt="" />
			</div>
			<h4 className={cl.stats_item_text}>
				{text}
			</h4>
			<h5 className={cl.stats_item_subtext}>{subtext}</h5>
		</div>
	)
}
