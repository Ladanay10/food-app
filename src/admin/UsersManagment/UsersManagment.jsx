import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { DeleteBtn } from "../../componetns/UI/Button/DeleteBtn";
import { Loader } from "../../componetns/UI/Loader/Loader";
import { dataBase } from "../../firebase";
import useGetData from "../../hooks/useGetData";
import cl from "./usersManagment.module.css";
// import useAuth from '../../hooks/useAuth';

export const UsersManagment = () => {
  const { data: users, loading } = useGetData("users");
  const deleteUser = async (user) => {
    await deleteDoc(doc(dataBase, "users", user.id));
  };

  return (
    <div className={cl.content}>
      {/* <div className={adminId ? cl.admin : cl.not_admin}>
			</div> */}
      <div className={cl.top_bar}>
        <h2 className={cl.title2}>Керування користувачами</h2>
      </div>
      <div className={cl.table}>
        <li>Користувач</li>
        <li>Емейл</li>
        <li>Видалити</li>
      </div>
      <div className={cl.users}>
        {loading ? (
          <Loader />
        ) : (
          users.length &&
          users.map((user) => (
            <div className={cl.user} key={user.id}>
              <div className={cl.user_info}>
                <img src={user.photoURL} alt="ava" />
                <h3>{user.displayName}</h3>
              </div>
              <div className={cl.user_email}>
                <h4>{user.emailValue}</h4>
              </div>
              <div className={cl.btns}>
                <DeleteBtn onClick={() => deleteUser(user)} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
