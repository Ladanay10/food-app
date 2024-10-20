// import { Button, Modal } from 'antd';
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../../../componetns/UI/Button/Button";
import { Input } from "../../../componetns/UI/Input/Input";
import { Modal } from "../../../componetns/UI/Modal/Modal";
import { dataBase, storage } from "../../../firebase";
import cl from "./newItem.module.css";
import { toast } from "react-toastify";

export const NewItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dishTitle, setDishTitle] = useState("");
  const [dishDesc, setDishDesc] = useState("");
  const [dishPrice, setDishPrice] = useState(0);
  const [dishStock, setDishStock] = useState(0);
  const [dishPlace, setDishPlace] = useState("");
  const [dishType, setDishType] = useState(0);
  const [dishImgURL, setDishImgURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  const addDish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = await collection(dataBase, "dishes");
      const storageRef = ref(storage, `dishesImages/${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, dishImgURL);
      uploadTask.on(
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: dishTitle,
              desc: dishDesc,
              price: dishPrice,
              stock: dishStock,
              place: dishPlace,
              type: dishType,
              quantity: 1,
              img: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      setDishImgURL(null);
      toast.success("Item added");
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className={cl.new_item} onClick={showModal}>
        <AiOutlinePlus size={28} />
        <span>Додати нову страву</span>
      </div>
      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        <form className={cl.form} onSubmit={addDish}>
          <label htmlFor="">Назва</label>
          <Input
            type="text"
            placeholder="Введіть назву страви"
            onChange={(e) => setDishTitle(e.target.value)}
          />
          <label htmlFor="">Опис</label>
          <Input
            type="text"
            placeholder="Введіть опис страви"
            onChange={(e) => setDishDesc(e.target.value)}
          />
          <label htmlFor="">Ціна</label>
          <Input
            type="text"
            placeholder="Введіть ціну страви"
            onChange={(e) => setDishPrice(e.target.value)}
          />
          <label htmlFor="">Запас</label>
          <Input
            type="number"
            placeholder="Введіть запас страви"
            onChange={(e) => setDishStock(e.target.value)}
          />
          <div className={cl.info}>
            <label>Тип страви</label>
            <select
              className={cl.select}
              value={dishType}
              onChange={(e) => setDishType(e.target.value)}
            >
              <option>Type</option>
              <option value="Hot Dishes">Гарячі</option>
              <option value="Cold Dishes">Холодні</option>
              <option value="Soup">Суп</option>
              <option value="Grill">Гриль</option>
              <option value="Dessert">Десерт</option>
              <option value="Drinks">Напої</option>
            </select>
            <label>Місце подачі страви</label>
            <select
              className={cl.select}
              value={dishPlace}
              onChange={(e) => setDishPlace(e.target.value)}
            >
              <option>Place</option>
              <option value="Dine In">В залі</option>
              <option value="To Go">На винос</option>
              <option value="Delivery">Доставка</option>
            </select>
          </div>
          <label>ImageURL</label>
          <Input
            type="file"
            onChange={(e) => {
              setDishImgURL(e.target.files[0]);
              console.log("зображення завантажено");
            }}
          />
          <div className={cl.btns}>
            <Button type="button" onClick={hideModal}>
              Скасувати
            </Button>
            <Button primary type="submit">
              Відправити
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
