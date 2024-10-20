import React from "react";
import cl from "./table.module.css";

export const Table = () => {
  return (
    <div className={cl.table}>
      <p className={cl.text}>Товар</p>
      <div className={cl.table_end}>
        <span className={cl.text}>К-сть</span>
        <p className={cl.text}>Ціна</p>
      </div>
    </div>
  );
};
