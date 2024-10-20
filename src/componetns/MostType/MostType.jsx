import React, { useEffect, useState } from "react";
import cl from "./mostType.module.css";
import circle from "../../assets/Circle.svg";
import useGetData from "../../hooks/useGetData";

export const MostType = () => {
  const { data: dataOrders, loading } = useGetData("orders");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (!loading && dataOrders) {
      const counts = { dineIn: 0, toGo: 0, delivery: 0 };

      for (const order of dataOrders) {
        switch (order.place) {
          case "Dine In":
            counts.dineIn++;
            break;
          case "To Go":
            counts.toGo++;
            break;
          case "Delivery":
            counts.delivery++;
            break;
          default:
            break;
        }
      }

      setCount1(counts.dineIn);
      setCount2(counts.toGo);
      setCount3(counts.delivery);
    }
  }, [dataOrders, loading]);

  return (
    <div className={cl.content}>
      <div className={cl.top_content}>
        <h1>Тип замовлення</h1>
        <select className={cl.select}>
          <option>Фільтр</option>
          <option value="today">Сьогодні</option>
          <option value="lastWeek">За минулий тиждень</option>
          <option value="lastMouth">За минулий місяць</option>
        </select>
      </div>
      <div className={cl.content_circle}>
        <img src={circle} alt="" />
        <div className={cl.info_items}>
          <div className={cl.item}>
            <div className={cl.item_circle}></div>
            <div className={cl.item_text}>
              <h4>На місці</h4>
              <span>{count1} клієнтів</span>
            </div>
          </div>
          <div className={cl.item}>
            <div className={cl.item_circle}></div>
            <div className={cl.item_text}>
              <h4>На винос</h4>
              <span>{count2} клієнтів</span>
            </div>
          </div>
          <div className={cl.item}>
            <div className={cl.item_circle}></div>
            <div className={cl.item_text}>
              <h4>Доставка</h4>
              <span>{count3} клієнтів</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
