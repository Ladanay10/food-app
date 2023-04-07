import { MODAL_NOT_VISIBLE, MODAL_VISIBLE } from "../types";



const initialState = {
	isVisible: false
};

export function reducerModal(state = initialState, action) {
	switch (action.type) {
		case MODAL_VISIBLE:
			return { ...state, isVisible: true }
		case MODAL_NOT_VISIBLE:
			return { ...state, isVisible: false }
		default: {
			return state;
		}
	}
}