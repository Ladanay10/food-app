import React from 'react';
import cl from './home.module.css';
import homeImg from '../../assets/homeImage.png';
import { Button } from '../../componetns/UI/Button/Button';
import glich from '../../assets/glich.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export const HomePage = () => {
	return (
		<div className={cl.content} >
			<img src={glich} className={cl.glich} alt="" />
			<motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.right}>
				<h3 className={cl.subtitle}>Its Quick & Amusing!</h3>
				<h1 className={cl.title}>
					<span>Th</span>e Art of speed
					food Quality
				</h1>
				<p className={cl.text}>
					We invite your to our restoraunt.
				</p>
				<Link to={'/store'}>
					<Button primary>See Dishes</Button>
				</Link>
			</motion.div>
			<motion.div initial={{ x: 300 }} animate={{ x: 0 }} className={cl.left}>
				<img src={homeImg} alt="" />
			</motion.div>
		</div>
	)
}
