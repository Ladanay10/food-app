import React, { useEffect, useState } from 'react';
import cl from './order.module.css';
import ava from '../../../assets/Avatar 1.svg';
import { Modal } from '../../../componetns/UI/Modal/Modal';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { dataBase } from '../../../firebase';
import { Button } from '../../../componetns/UI/Button/Button';
import { FiTrash } from 'react-icons/fi';
import { CiEdit } from 'react-icons/ci';


export const Order = ({ order }) => {
	const [orderValue, setOrderValue] = useState(order.orderStatus);
	const [modalIsActive, setModalIsActive] = useState(false);

	const handleChange = async (e) => {
		setOrderValue(e.target.value);
	}
	const deleteOrder = async (order) => {
		await deleteDoc(doc(dataBase, 'orders', order.id));
	}
	useEffect(() => {
		async function saveData() {
			const docRef = (doc(dataBase, 'orders', order.id))
			try {
				await updateDoc(docRef, {
					orderStatus: orderValue,
				})
			} catch (error) {
				console.log(error);
			}
		}
		saveData();
	}, [orderValue]);
	return (
		<>
			<div className={cl.users_wrapper}>
				<div className={cl.user}>
					<div className={cl.user_info}>
						<img src={!order.userIMG ? ava : order.userIMG} alt="" />
						<p>{order.displayName}</p>
					</div>
				</div>
				<div className={cl.menu}>
					<p>{order.order[0].title}</p>
				</div>
				<div className={cl.price}>
					<p>${order.totalPrice}</p>
				</div>
				<div className={(orderValue === 'Preparing' && cl.status + ' ' + cl.status_prepering)
					|| (orderValue === 'Completed' && cl.status + ' ' + cl.status_completed)
					|| (orderValue === 'Pending' && cl.status + ' ' + cl.status_pending || cl.status)}>
					<h3>{orderValue}</h3>
				</div>
				<div className={cl.btns}>
					<Button onClick={() => setModalIsActive(true)}>
						<CiEdit />
					</Button>
					<Button primary onClick={() => deleteOrder(order)}>
						<FiTrash />
					</Button>
				</div>
			</div>
			<Modal active={modalIsActive} setActive={setModalIsActive}>
				<select onChange={handleChange}>
					<option>Select</option>
					<option value="Pending">Pending</option>
					<option value="Preparing">Prepering</option>
					<option value="Completed">Completed</option>
				</select>
			</Modal>
		</>

	)
}
