import React from 'react';
import cl from './settings.module.css';
import { RiFileList3Line, RiRestartLine } from 'react-icons/ri';
import { IoRestaurantSharp } from 'react-icons/io5';
import { Route, Routes } from 'react-router-dom';
import { Option } from '../../componetns/Option/Option';
import { ProductManagment } from '../../admin/ProductManagment/ProductManagment';
import { Skeleton } from '../../componetns/UI/Skeleton/Skeleton';
import { OrdersManagment } from '../../admin/OrdersManagment/OrdersManagment';
import { FaUsersCog } from 'react-icons/fa';
import { UsersManagment } from '../../admin/UsersManagment/UsersManagment';
import { Soon } from '../../componetns/Soon/Soon';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';
import img from '../../assets/PngItem_4707476.png';
export const Settings = () => {
	const { currentUser } = useAuth();
	const adminId = currentUser.uid === 'lGCjwvvlhfctinvrYJ61LDJZOT02';

	return (
		<div className={cl.setting_page}>
			<h1 className={cl.title}>Settings</h1>
			<div className={cl.content}>
				<motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.settings_options}>
					<Option
						path='color-mode'
						icon={<RiRestartLine />}
						title='Your Restaurant'
						desc='Dark and Light mode, Font size'
					/>
					<Option
						path='product-managment'
						icon={<IoRestaurantSharp />}
						title='Products Management'
						desc='Manage your product, pricing, etc'
					/>
					<Option
						path='orders-managment'
						icon={<RiFileList3Line />}
						title='Orders Management'
						desc='Manage your orders, etc'
					/>
					<Option
						path='users-managment'
						icon={<FaUsersCog />}
						title='Users Management'
						desc='Manage your users, etc'
					/>
				</motion.div>
				<motion.div initial={{ x: 300 }} animate={{ x: 0 }} className={cl.content__right}>
					{
						adminId ?
							<Routes>
								<Route />
								<Route index element={<Skeleton skeletonSetting />} />
								<Route path='/color-mode' element={<Soon />} />
								<Route path='/product-managment' element={<ProductManagment />} />
								<Route path='/orders-managment' element={<OrdersManagment />} />
								<Route path='/users-managment' element={<UsersManagment />} />
							</Routes> :
							<div className={cl.not_admin}>
								<h3>Sorry, but you <span>don't have</span> rights</h3>
								<img src={img} alt="non_rights" />
							</div>
					}
				</motion.div>
			</div>
		</div>

	)
}
