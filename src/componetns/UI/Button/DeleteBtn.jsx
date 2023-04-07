import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { CiEdit } from 'react-icons/ci';
import cl from './button.module.css';

export const DeleteBtn = ({ edit, onClick }) => {

	return (
		<div className={cl.delete_btn} onClick={onClick}>
			{
				edit ? <CiEdit size={20} /> : <FiTrash size={20} />
			}
		</div>
	)
}
