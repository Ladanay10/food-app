import React from "react";
import cl from "./skeleton.module.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img from "../../../assets/basket_empty.png";
import img2 from "../../../assets/select.jpg";
import settingSkelet from "../../../assets/settingSkeleton.png";
import { motion } from "framer-motion";
export const Skeleton = ({
  skeletonSetting,
  skeletonBasket,
  skeletonSelect,
}) => {
  return (
    <>
      {skeletonSetting ? (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          className={cl.skeleton_setting}
        >
          <h3>Це меню налаштувань</h3>
          <p>Будь ласка, виберіть опцію</p>
          <img src={settingSkelet} alt="skelet" />
        </motion.div>
      ) : skeletonBasket ? (
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className={cl.skeleton}
        >
          <h3>Ваш кошик порожній...</h3>
          <p>Будь ласка, додайте кілька страв</p>
          <MdOutlineAddShoppingCart size={40} />
          <img src={img} alt="bg" />
        </motion.div>
      ) : skeletonSelect ? (
        <div className={cl.skeleton_select}>
          <p>Будь ласка, виберіть інший тип страви!</p>
          <img src={img2} alt="" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
