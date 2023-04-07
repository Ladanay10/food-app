import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket } from '../componetns/Basket/Basket'
import { SideBar } from '../componetns/SideBar/SideBar'
import { ProtectedRoute } from '../protectedRoute'
import { Dashboard } from './Dashboard/Dashboard'
import { HomePage } from './Home/HomePage'
import { LogOut } from './LogOut/LogOut'
import { Settings } from './Settings/Settings'
import { Shop } from './Shop/Shop'

export const Root = () => {

	return (
		<>
			<SideBar />
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
