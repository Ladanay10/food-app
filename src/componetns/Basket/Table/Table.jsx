import React from 'react';
import cl from './table.module.css';

export const Table = () => {
	return (
		<div className={cl.table}>
			<p className={cl.text}>Item</p>
			<div className={cl.table_end}>
				<span className={cl.text}>Qty</span>
				<p className={cl.text}>Price</p>
			</div>
		</div>
	)
}
