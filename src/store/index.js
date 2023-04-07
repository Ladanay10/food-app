import { reducerAddItem } from './reducer/reducerAddItem';
import reducerFilter from './reducer/reducerFilter';
import { reducerGetItem } from './reducer/reducerGetItem';
import { configureStore } from "@reduxjs/toolkit";
import { reducerModal } from './reducer/reducerModal';
export const store = configureStore(
	{
		reducer: {
			reducerGetItem: reducerGetItem,
			reducerAddItem: reducerAddItem,
			reducerFilter: reducerFilter,
			reducerModal: reducerModal,
		}
	}
)

