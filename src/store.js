import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducer from "./reducers";

const initialState = {};
const middleware = { thunk };

const store = createStore(
	allReducer,
	initialState,
	applyMiddleware(...middleware)
);

export default store;
