// import { dishesData } from '../../../data/dishesData'
import { SEARC_ITEMS, SET_DEFAULT } from '../types';


const initialState = {
	searchValue: ''
};

export function reducerGetItem(state = initialState, action) {
	// const items = [action.payload].length > 1 && [action.payload].filter((item) => item.title);
	// console.log(items);
	switch (action.type) {
		case SEARC_ITEMS:
			return { ...state, searchValue: action.payload}
		// case SET_DEFAULT:
		// 	return { dishes: [] }
		default: {
			return state;
		}
	}
}