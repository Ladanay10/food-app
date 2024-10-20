import React from "react";
import cl from "./logout.module.css";
import { auth } from "../../firebase";
import { Button } from "../../componetns/UI/Button/Button";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import glich from "../../assets/glich.png";
import { motion } from "framer-motion";
export const LogOut = () => {
  const navigate = useNavigate();
  const { currentUser } = getAuth();
  const date = new Date().toDateString();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cl.content}>
      <img src={glich} className={cl.glich} alt="" />
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={cl.logOut_info}
      >
        <h1>Вихід</h1>
        <p>{date}</p>
        <p>© Ладанай</p>
      </motion.div>
      <motion.div initial={{ x: 300 }} animate={{ x: 0 }} className={cl.flex}>
        {currentUser && (
          <div className={cl.userInfo}>
            <span className={cl.user_name}>{currentUser.displayName}</span>
            <span className={cl.user_email}>{currentUser.email}</span>
            <img src={currentUser.photoURL} alt={"photoURL"} />
            <Button primary onClick={handleLogOut}>
              Вийти
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
