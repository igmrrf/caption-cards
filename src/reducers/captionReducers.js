import { FETCH_CAPTIONS } from "../actions/type";

const initialState = {
	captions: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_CAPTIONS:
			return {
				...state,
				captions: action.payload
			};
		default:
			return state;
	}
}
