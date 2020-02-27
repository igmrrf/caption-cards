import { GET_CAPTIONS } from "../actions/type";

const initialState = {
	captions: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CAPTIONS:
			return {
				...state,
				captions: action.payload
			};
		default:
			return state;
	}
}
