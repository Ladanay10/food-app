import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SET_PLACE } from "../../../store/types";
import cl from "./select.module.css";

export const Select = () => {
  const dispatch = useDispatch();

  const options = ["Dine In", "To Go", "Delivery"];

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch({ type: SET_PLACE, place: value });
    },
    [dispatch]
  );

  return (
    <select className={cl.select} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
