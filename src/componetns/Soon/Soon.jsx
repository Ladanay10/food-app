import React from 'react';
import cl from './Soon.module.css';
import img from '../../assets/Red-Coming-Soon-Stamp.png';
import { motion } from 'framer-motion';
export const Soon = () => {
	return (
		<motion.div
			initial={{ y: -200 }} animate={{ y: 0 }}
			className={cl.soon}
		>
			<img src={img} alt="" />
		</motion.div>
	)
}
