// import { dishesData } from '../../../data/dishesData'
import { SEARC_ITEMS, SET_DEFAULT } from '../types';
import { dishesData } from '../../data/dishesData';


const initialState = {
	dishes: [...dishesData]
};

export function reducerGetItem(state = initialState, action) {
	switch (action.type) {
		case SEARC_ITEMS:
			return { ...state, dishes: state.dishes.filter((value) => (value.title.toLowerCase().includes(action.payload.toLowerCase()))) }
		case SET_DEFAULT:
			return { dishes: [...dishesData] }
		default: {
			return state;
		}
	}
}