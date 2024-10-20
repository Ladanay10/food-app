import React from "react";
import cl from "./home.module.css";
import homeImg from "../../assets/homeImage.png";
import { Button } from "../../componetns/UI/Button/Button";
import glich from "../../assets/glich.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const HomePage = () => {
  return (
    <div className={cl.content}>
      <img src={glich} className={cl.glich} alt="" />
      <motion.div initial={{ x: -300 }} animate={{ x: 0 }} className={cl.right}>
        <h3 className={cl.subtitle}>Це швидко та цікаво!</h3>
        <h1 className={cl.title}>
          <span>Ми</span>стецтво швидкої якості їжі
        </h1>
        <p className={cl.text}>Ми запрошуємо вас до нашого ресторану. </p>
        <Link to={"/store"}>
          <Button primary>Переглянути страви</Button>
        </Link>
      </motion.div>
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }} className={cl.left}>
        <img src={homeImg} alt="" />
      </motion.div>
    </div>
  );
};
