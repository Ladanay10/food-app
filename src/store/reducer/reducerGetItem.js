// import { dishesData } from '../../../data/dishesData'
import { MAKE_ORDER, SEARC_ITEMS } from "../types";

const initialState = {
  searchValue: "",
  makeOrder: false,
};

export function reducerGetItem(state = initialState, action) {
  switch (action.type) {
    case SEARC_ITEMS:
      return { ...state, searchValue: action.payload };

    case MAKE_ORDER:
      return { ...state, makeOrder: true };
    default: {
      return state;
    }
  }
}
