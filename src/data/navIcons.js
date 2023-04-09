
import { SlHome } from 'react-icons/sl';
import { RxGear } from 'react-icons/rx';
import { RxCrumpledPaper } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { SiPagseguro } from 'react-icons/si';
import { MdOutlineMarkunread } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
export const navIcons = [

	{
		id: 2,
		img: <SlHome size={25} />,
		src: 'store',
		name: 'store'
	},
	{
		id: 3,
		img: <RxCrumpledPaper size={25} />,
		isActive: false,
		name: 'paper'
	},
	{
		id: 4,
		img: <SiPagseguro size={25} />,
		isActive: false,
		src: 'dashboard'
	},
	{
		id: 5,
		img: <MdOutlineMarkunread size={25} />,
		isActive: false,
		src: 'sada'
	},
	{
		id: 6,
		img: <IoNotificationsOutline size={25} />,
		src: 'sadad'
	},
	{
		id: 7,
		img: <RxGear size={25} />,
		src: '/settings'
	},
	{
		id: 8,
		img: <IoIosLogOut size={25} />,
		src: '/logout'
	},
]