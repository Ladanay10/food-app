import React, { useEffect, useMemo } from "react";
import { Button } from "../UI/Button/Button";
import cl from "./mostOrdered.module.css";
import useGetData from "../../hooks/useGetData";

export const MostOrdered = () => {
  const { data: dataOrders, loading } = useGetData("orders");

  const mostOrderedDishes = useMemo(() => {
    const dishCounts = {};

    dataOrders.forEach((order) => {
      order.order.forEach((item) => {
        const { title, quantity } = item;
        const count = parseInt(quantity, 10) || 0;

        if (dishCounts[title]) {
          dishCounts[title].count += count;
        } else {
          dishCounts[title] = {
            count: count,
            img: item.img,
          };
        }
      });
    });

    return Object.entries(dishCounts)
      .map(([title, { count, img }]) => ({ title, count, img }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  }, [dataOrders]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cl.content}>
      <div className={cl.top_content}>
        <h1>Замовлені</h1>
        <select className={cl.select}>
          <option>Фільтр</option>
          <option value="complete">Сьогодні</option>
          <option value="preparing">За минулий тиждень</option>
          <option value="pending">За минулий місяць</option>
        </select>
      </div>
      <div className={cl.items}>
        {mostOrderedDishes.map((dish, index) => (
          <div key={index} className={cl.item}>
            <img src={dish.img} alt="dishItemImg" />
            <div className={cl.item_info}>
              <h2>{dish.title}</h2>
              <p>{dish.count} страв замовлено</p>
            </div>
          </div>
        ))}
      </div>
      <Button>Переглянути всі</Button>
    </div>
  );
};
