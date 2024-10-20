import React from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM_IN_BASKET } from "../../store/types";
import cl from "./dishItem.module.css";
import { toast } from "react-toastify";
export const DishItem = ({ dish }) => {
  const dispatch = useDispatch();
  const handleAddItemInBasket = (dish) => {
    dispatch({
      type: ADD_ITEM_IN_BASKET,
      payload: dish,
      id: dish.id,
      price: dish.price,
    });
    toast.success("Страва була додана");
  };
  return (
    <div className={cl.item} onClick={() => handleAddItemInBasket(dish)}>
      <img src={dish.img} alt={dish.title} />
      <h2 className={cl.name}>{dish.title}</h2>
      <span className={cl.price}>${dish.price}</span>
      <p className={cl.stock}>{dish.stock} в наявності</p>
    </div>
  );
};
