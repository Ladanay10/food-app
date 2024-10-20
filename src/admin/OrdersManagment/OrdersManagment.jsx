import React from "react";
import cl from "./ordersManagment.module.css";
import useGetData from "../../hooks/useGetData";
import { Order } from "./Order/Order";
import { Loader } from "../../componetns/UI/Loader/Loader";

export const OrdersManagment = () => {
  const { data, loading } = useGetData("orders");

  return (
    <div className={cl.content}>
      <div className={cl.top_bar}>
        <h2 className={cl.title2}>Управління замовленнями</h2>
      </div>
      <div className={cl.table}>
        <div className={cl.table1}>
          <li>Користувач</li>
          <li>Меню</li>
        </div>
        <div className={cl.table2}>
          <li>Загальна ціна</li>
          <li>Статус</li>
          <li>Дії</li>
        </div>
      </div>
      <div className={cl.users}>
        {loading ? (
          <Loader />
        ) : data.length ? (
          data.map((order, index) => <Order key={index} order={order} />)
        ) : (
          <h2>Зараз у нас немає замовлень</h2>
        )}
      </div>
    </div>
  );
};
