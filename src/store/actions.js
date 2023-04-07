
import axios from "axios";
import { GET_ITEMS } from "./types";

const URL = 'http://localhost:3000/';


export function getItems() {
	return async dispatch => {
		axios.get(URL + 'dishes').then(response => dispatch({
			type: GET_ITEMS,
			payload: response.data,
		}))
	}
}