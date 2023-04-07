import React, { useState } from 'react';
import cl from './productManagment.module.css';
import { useSelector } from 'react-redux';
import { NewItem } from './AddNewItem/NewItem';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { dataBase, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { DeleteBtn } from '../../componetns/UI/Button/DeleteBtn';
import { Input } from '../../componetns/UI/Input/Input';
import { Modal } from '../../componetns/UI/Modal/Modal';
import { Button } from '../../componetns/UI/Button/Button';
import { FilterBar } from '../../componetns/FilterBar/FilterBar';
import useGetData from '../../hooks/useGetData';
import { Loader } from '../../componetns/UI/Loader/Loader';
export const ProductManagment = () => {
	const type = useSelector(state => state.reducerFilter.typeDish)

	const { data, loading } = useGetData('dishes')
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeDish, setActiveDish] = useState(null);

	const [dishTitle, setDishTitle] = useState('');
	const [dishDesc, setDishDesc] = useState('');
	const [dishPrice, setDishPrice] = useState('');
	const [dishStock, setDishStock] = useState('');
	const [dishPlace, setDishPlace] = useState('');
	const [dishType, setDishType] = useState('');
	const [dishImgURL, setDishImgURL] = useState(null);

	const dishes = [...data].filter(item => item.type === type);

	const deleteDish = async (id) => {
		await deleteDoc(doc(dataBase, 'dishes', id));
	}
	const handleEditDish = (dish) => {
		setIsModalOpen(true);
		setActiveDish(dish);
		setDishTitle(dish.title);
		setDishDesc(dish.desc);
		setDishPrice(dish.price);
		setDishStock(dish.stock);
		setDishPlace(dish.place);
	}
	const save = async (e) => {
		e.preventDefault();
		try {
			const docRef = doc(dataBase, 'dishes', activeDish.id)
			const storageRef = ref(storage, `dishesImages/${Date.now() + dishImgURL.name} `)
			const uploadTask = uploadBytesResumable(storageRef, dishImgURL)
			uploadTask.on(() => console.log('images not upload'), () => {
				getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
					await updateDoc(docRef,
						{
							title: dishTitle,
							desc: dishDesc,
							price: dishPrice,
							stock: dishStock,
							place: dishPlace,
							type: dishType,
							quantity: 1,
							img: downloadURL,
						})
				})
			})
			console.log('Dish Edit!!!');
			setIsModalOpen(false);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className={cl.product__managment}>
			<div className={cl.top_bar}>
				<h2 className={cl.title2}>
					Products Management
				</h2>
			</div>
			<FilterBar />
			<div className={cl.items}>
				<NewItem />
				{
					loading ? <Loader/> :
						dishes.map((dish) => (
							<div className={cl.item} key={dish.id}>
								<img src={dish.img} alt="" />
								<h4 className={cl.dish_title}>{dish.title}</h4>
								<div className={cl.dish_info}>
									<p>${dish.price}</p>
									•
									<span>{dish.stock} Stock</span>
								</div>
								<div className={cl.btns}>
									<DeleteBtn edit onClick={() => handleEditDish(dish)} />
									<DeleteBtn onClick={() => deleteDish(dish.id)} />
								</div>


							</div>
						))
				}
			</div>

			<Modal active={isModalOpen} setActive={setIsModalOpen}>

				<form className={cl.form} onSubmit={save} >
					<label htmlFor="">Title</label>
					<Input
						type="text"
						placeholder='Enter title dish'
						value={dishTitle}
						onChange={(e) => setDishTitle(e.target.value)}
					/>
					<label htmlFor="">Description</label>
					<Input
						type="text"
						placeholder='Enter description dish'
						value={dishDesc}

						onChange={(e) => setDishDesc(e.target.value)}
					/>
					<label htmlFor="">Price</label>
					<Input
						type="number"
						placeholder='Enter price dish'
						value={dishPrice}

						onChange={(e) => setDishPrice(e.target.value)}
					/>
					<label htmlFor="">Quantity</label>
					<Input

						type="number"
						placeholder='Enter stock of dish'
						value={dishStock}

						onChange={(e) => setDishStock(e.target.value)}

					/>
					<div className={cl.info}>
						<label >Type of dish</label>
						<select className={cl.select}
							value={dishType}
							onChange={(e) => setDishType(e.target.value)}
						>
							<option>Type</option>
							<option value="Hot Dishes">Hot</option>
							<option value="Cold Dishes">Cold</option>
							<option value="Soup">Soup</option>
						</select>
						<label >Place of dish</label>
						<select className={cl.select}
							value={dishPlace}
							onChange={(e) => setDishPlace(e.target.value)}
						>
							<option>Place</option>
							<option value="Dine In">Dine In</option>
							<option value="To Go">To Go</option>
							<option value="Delivery">Delivery</option>
						</select>
					</div>
					<label htmlFor="">ImageURL</label>
					<Input
						type="file"
						onChange={(e) => setDishImgURL(e.target.files[0])}
					/>
					<div className={cl.btns}>
						<Button type='button' onClick={() => setIsModalOpen(false)}>Cancel</Button>
						<Button primary type='submit' >Save</Button>
					</div>
				</form>
			</Modal>

		</div>
	)
}
