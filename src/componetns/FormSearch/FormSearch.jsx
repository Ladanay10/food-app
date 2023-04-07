import React, { useEffect, useState } from 'react';
import cl from './formSearch.module.css';
import { IoSearchOutline } from 'react-icons/io5'
import { Input } from '../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { SEARC_ITEMS, SET_DEFAULT } from '../../store/types';

export const FormSearch = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	// const { data, loading } = useGetData('dishes')

	const handleChange = (e) => {
		setInput(e.target.value);
	}
	useEffect(() => {
		dispatch({ type: SEARC_ITEMS, payload: input, })
		return () => {
			dispatch({ type: SET_DEFAULT })
		}
	}, [input, dispatch])
	return (
		<form className={cl.search} onSubmit={(e) => e.preventDefault()}>
			<IoSearchOutline size={20} />
			<Input onChange={handleChange} type="text" placeholder='Search for food, coffe, etc..' />
		</form>
	)
}
