import React, { useState } from "react";
import cl from "./payment.module.css";
import { paymentData } from "../../data/paymentData";
import { PaymentItem } from "../UI/PaymentItem/PaymentItem";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../firebase";
import useAuth from "../../hooks/useAuth";
import { CLEAR_ITEMS, MAKE_ORDER } from "../../store/types";
import { toast } from "react-toastify";
export const Payment = ({ setPayment, value, payment }) => {
  const basketItems = useSelector((state) => state.reducerAddItem.basketItems);
  const { currentUser } = useAuth();
  const [orderPlace, setOrderPlace] = useState(value);
  const [orderNumTable, setOrderNumTable] = useState("");
  const dispatch = useDispatch();
  const totalPrice = basketItems
    .map((item) => item.price * 1)
    .reduce((prev, next) => prev + next);
  const confirmPayload = async () => {
    try {
      const docRef = await collection(dataBase, "orders");
      await addDoc(docRef, {
        displayName: currentUser.displayName,
        email: currentUser.email,
        userIMG: currentUser.photoURL,
        place: orderPlace,
        tableN: orderNumTable,
        order: [...basketItems],
        totalPrice: totalPrice,
        orderStatus: "Waiting",
      });
      setPayment(false);
      dispatch({ type: CLEAR_ITEMS });
      toast.success("Payment has been made");
      dispatch({ type: MAKE_ORDER });
    } catch (error) {
      toast.error("Opps!", error);
    }
  };
  return (
    <div className={cl.content}>
      <div className={cl.payment}>
        <div className={cl.content_info}>
          <h1 className={cl.title}>Оплата</h1>
          <h3 className={cl.text}>Доступно 3 методи оплати</h3>
        </div>
        <div className={cl.method}>
          <h4 className={cl.method_title}>Метод оплати</h4>
          <div className={cl.method__items}>
            {paymentData.map((item) => (
              <PaymentItem item={item} key={item.id} />
            ))}
          </div>
        </div>
        <form className={cl.form}>
          <label>Ім'я власника картки</label>
          <Input placeholder={"Введіть ваше імя"} />
          <label>Номер картки</label>
          <Input placeholder={"Введіть номер картки"} />
          <div>
            <div className={cl.form_bottom_div}>
              <label>Термін дії</label>
              <Input placeholder={"03/2012"} />
            </div>
            <div className={cl.form_bottom_div}>
              <label>CVV</label>
              <Input placeholder={"123"} />
            </div>
          </div>
          <div>
            <div className={cl.form_bottom_div}>
              <label>Тип замовлення</label>
              <select
                className={cl.select}
                value={orderPlace}
                onChange={(e) => setOrderPlace(e.target.value)}
              >
                <option>Місце</option>
                <option value="Dine In">На місці</option>
                <option value="To Go">На винос</option>
                <option value="Delivery">Доставка</option>
              </select>
            </div>
            <div className={cl.form_bottom_div}>
              <label>Номер столу</label>
              <Input
                onChange={(e) => setOrderNumTable(e.target.value)}
                placeholder={"140"}
              />
            </div>
          </div>
        </form>
      </div>
      <div className={cl.btns}>
        <Button onClick={() => setPayment(false)}>Скасувати</Button>
        <Button onClick={confirmPayload} primary>
          Підтвердити оплату
        </Button>
      </div>
    </div>
  );
};
