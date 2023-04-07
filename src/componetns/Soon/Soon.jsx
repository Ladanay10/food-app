import React from 'react';
import cl from './Soon.module.css';
import img from '../../assets/Red-Coming-Soon-Stamp.png';

export const Soon = () => {
  return (
	<div className={cl.soon}>
		<img src={img} alt="" />
	</div>
  )
}
