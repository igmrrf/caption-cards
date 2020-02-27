import { GET_CAPTIONS } from "./type";
import API from "../api";

export const getCaptions = () => dispatch => {
	API.get("caption/").then(res => {
		console.log(res);
		const captions = res.data.data.captions;
		dispatch({
			type: GET_CAPTIONS,
			payload: captions
		});
		console.log(captions);
	});
};
