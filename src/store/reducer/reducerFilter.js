import { SET_PLACE, SET_TYPE } from "../types";

const initialState = {
  place: "Dine In",
  typeDish: "Hot Dishes",
};

function reducerFilter(state = initialState, action) {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        place: action.place,
      };
    case SET_TYPE:
      return {
        ...state,
        typeDish: action.payload,
      };
    default:
      return state;
  }
}
export default reducerFilter;
