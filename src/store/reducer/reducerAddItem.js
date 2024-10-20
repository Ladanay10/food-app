import {
  ADD_ITEM_IN_BASKET,
  ADD_NOTE,
  CHANGE_PRICE,
  CLEAR_ITEMS,
  DELETE_ITEM_IN_BASKET,
} from "../types";

const initialState = {
  basketItems: [],
};

export function reducerAddItem(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_IN_BASKET:
      if (
        [...state.basketItems].filter((value) => value.id === action.id).length
      ) {
        return state;
      } else {
        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            { ...action.payload, id: action.id },
          ],
        };
      }
    case DELETE_ITEM_IN_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (value) => value.id !== action.payload
        ),
      };
    case CHANGE_PRICE:
      return {
        ...state,
        basketItems: state.basketItems.map((value) => {
          if (value.id === action.id) {
            const newQuantity = action.quantity >= 0 ? action.quantity : 0; // Не дозволяємо негативні значення
            return { ...value, quantity: newQuantity };
          }
          return value;
        }),
      };

    case CLEAR_ITEMS:
      return { basketItems: [] };
    case ADD_NOTE:
      return {
        ...state,
        basketItems: state.basketItems.map((value) => {
          if (value.id === action.id) {
            return { ...value, note: action.note };
          }
          return value;
        }),
      };
    default:
      return state;
  }
}
