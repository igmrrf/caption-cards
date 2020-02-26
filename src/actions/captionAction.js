import { FETCH_CAPTIONS } from "./type";
import API from "../api";

export const fetchCaptions = () => dispatch => {
	API.get("caption/").then(res => {
		console.log(res);
		const captions = res.data.data.captions;
		dispatch({
			type: FETCH_CAPTIONS,
			payload: captions
		});
		console.log(captions);
	});
};
