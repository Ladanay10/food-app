// import { dishesData } from '../../../data/dishesData'
import { MAKE_ORDER, SEARC_ITEMS } from '../types';


const initialState = {
	searchValue: '',
	makeOrder: false
};

export function reducerGetItem(state = initialState, action) {
	// const items = [action.payload].length > 1 && [action.payload].filter((item) => item.title);
	// console.log(items);
	switch (action.type) {
		case SEARC_ITEMS:
			return { ...state, searchValue: action.payload }
		// case SET_DEFAULT:
		// 	return { dishes: [] }
		case MAKE_ORDER:
			return { ...state, makeOrder: true }
		default: {
			return state;
		}
	}
}