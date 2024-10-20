import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../UI/Button/Button";
import cl from "./order.module.css";

export const Order = ({ payment, setPayment }) => {
  const basketItems = useSelector((state) => state.reducerAddItem.basketItems);

  const price = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBuyProduct = () => {
    setPayment(true);
  };

  return (
    <div className={cl.order}>
      <div className={cl.order_content}>
        <p className={cl.text}>Знижка</p>
        <span className={cl.price}>$0</span>
      </div>
      <div className={cl.order_content}>
        <p className={cl.text}>Проміжний підсумок</p>
        <span className={cl.price}>${price.toFixed(2)}</span>
      </div>
      {payment ? (
        <></>
      ) : (
        <Button primary onClick={handleBuyProduct}>
          Продовжити до оплати
        </Button>
      )}
    </div>
  );
};
