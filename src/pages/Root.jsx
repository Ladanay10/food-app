import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket } from '../componetns/Basket/Basket'
import { SideBar } from '../componetns/SideBar/SideBar'
import { ProtectedRoute } from '../protectedRoute'
import { Dashboard } from './Dashboard/Dashboard'
import { HomePage } from './Home/HomePage'
import { LogOut } from './LogOut/LogOut'
import { Settings } from './Settings/Settings'
import { Shop } from './Shop/Shop'
import { RxTextAlignRight, RxCross2 } from 'react-icons/rx';
// const Mobile = () => {
// 	return (
// 		<div>

// 		</div>
// 	)
// }
export const Root = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<>
			<div className={'mobile'}>
				{
					<RxTextAlignRight onClick={() => setIsMobile(!isMobile)} size={25} color='#EA7C69' />
				}
			</div>
			{
				<SideBar isMobile={isMobile} setIsMobile={setIsMobile} />
			}
			<Routes>
				<Route path='/' element={<ProtectedRoute />}>
					<Route path='home' element={<HomePage />} />
					<Route path='store' element={<Shop />} />
					<Route path='settings/*' element={<Settings />} />
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='logout' element={<LogOut />} />
				</Route>
			</Routes>
		</>
	)
}
