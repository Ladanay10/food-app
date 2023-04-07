import React from 'react';
import cl from './skeleton.module.css';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import img from '../../../assets/basket_empty.png';
import settingSkelet from '../../../assets/settingSkeleton.png';
export const Skeleton = ({ skeletonSetting }) => {
	return (
		<>
			{
				skeletonSetting
					?
					<div className={cl.skeleton_setting}>
						<h3>It is setting MENU</h3>
						<p>Please, choose some option</p>
						<img src={settingSkelet} alt="" />
					</div>
					:
					<div className={cl.skeleton}>
						<h3>Your basket is empty...</h3>
						<p>Please, add some dishes</p>
						<MdOutlineAddShoppingCart size={40} />
						<img src={img} alt="bg" />
					</div>
			}
		</>

	)
}
