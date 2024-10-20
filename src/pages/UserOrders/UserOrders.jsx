import React from "react";
import cl from "./userOrders.module.css";
import { getAuth } from "firebase/auth";
import useGetData from "../../hooks/useGetData";
import { motion } from "framer-motion";
import img from "../../assets/pngwing.com.png";
import { Loader } from "../../componetns/UI/Loader/Loader";

export const UserOrders = () => {
  const { data, loading } = useGetData("orders");
  const { currentUser } = getAuth();
  const userOrders = data.filter(
    (order) => currentUser && order.email === currentUser.email
  );

  return (
    <motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.content}>
      <div className={cl.content_top}>
        <h1 className={cl.title}>Замовлення користувача</h1>
        <span className={cl.subtitle}>
          {currentUser && currentUser.displayName}
        </span>
      </div>
      <div className={cl.user_orders}>
        {loading ? (
          <Loader />
        ) : userOrders.length ? (
          userOrders.map((order) => (
            <div key={order.id} className={cl.info_item}>
              <div className={cl.user_info}>
                <img src={order.userIMG} alt="ava" />
                <h5>{order.displayName}</h5>
              </div>
              <p>{order.order[0].title}</p>
              <div className={cl.order_info}>
                <span>${order.totalPrice}</span>
                <button
                  className={
                    order.orderStatus === "Completed"
                      ? `${cl.status} ${cl.status_completed}`
                      : order.orderStatus === "Pending"
                      ? `${cl.status} ${cl.status_pending}`
                      : `${cl.status} ${cl.status_preparing}`
                  }
                >
                  {order.orderStatus}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={cl.order_empty}>
            <h3>
              Ти <span>не маєш</span> ніяких замовлень
            </h3>
            <img src={img} alt="emoji" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
