import React from "react";
import cl from "./settings.module.css";
import { RiFileList3Line } from "react-icons/ri";
import { IoRestaurantSharp } from "react-icons/io5";
import { Route, Routes } from "react-router-dom";
import { Option } from "../../componetns/Option/Option";
import { ProductManagment } from "../../admin/ProductManagment/ProductManagment";
import { Skeleton } from "../../componetns/UI/Skeleton/Skeleton";
import { OrdersManagment } from "../../admin/OrdersManagment/OrdersManagment";
import { FaUsersCog } from "react-icons/fa";
import { UsersManagment } from "../../admin/UsersManagment/UsersManagment";
import { Soon } from "../../componetns/Soon/Soon";
import { motion } from "framer-motion";
export const Settings = () => {
  return (
    <div className={cl.setting_page}>
      <h1 className={cl.title}>Налаштування</h1>
      <div className={cl.content}>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className={cl.settings_options}
        >
          <Option
            path="product-managment"
            icon={<IoRestaurantSharp />}
            title="Управління продуктами"
            desc="Керуй продуктами, цінами, тощо"
          />
          <Option
            path="orders-managment"
            icon={<RiFileList3Line />}
            title="Управління замовленнями"
            desc="Керуй замовленнями, тощо"
          />
          <Option
            path="users-managment"
            icon={<FaUsersCog />}
            title="Керування користувачами"
            desc="Керуй своїми користувачами, тощо"
          />
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className={cl.content__right}
        >
          <Routes>
            <Route />
            <Route index element={<Skeleton skeletonSetting />} />
            <Route path="/color-mode" element={<Soon />} />
            <Route path="/product-managment" element={<ProductManagment />} />
            <Route path="/orders-managment" element={<OrdersManagment />} />
            <Route path="/users-managment" element={<UsersManagment />} />
          </Routes>
        </motion.div>
      </div>
    </div>
  );
};
