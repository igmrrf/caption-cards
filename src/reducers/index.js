import { combineReducers } from "redux";
import captionReducer from "./captionReducers";

export default combineReducers({
	captions: captionReducer
});
