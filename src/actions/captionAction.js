import {
	POST_CAPTION,
	POST_TAG,
	POST_TAGS_TO_CAPTION,
	GET_TAGS,
	GET_CAPTIONS,
	POST_CAPTION_WITH_TAG,
	GET_CAPTIONS_UNDER_TAG,
	GET_CAPTION_WITH_TAGS
} from "./type";
import API from "../api";

export const postCaption = captionData => dispatch => {
	API.post("caption/", { captionData }).then(res => {
		console.log(res);
		const captionResponse = res.status;
		dispatch({
			type: POST_CAPTION,
			payload: captionResponse
		});
	});
};
export const postTags = tagData => dispatch => {
	API.post("tag/", { tagData }).then(res => {
		console.log(res);
		const tagResponse = res.status;
		dispatch({
			type: POST_TAG,
			payload: tagResponse
		});
	});
};
export const postTagsToCaptions = tagToCaption => dispatch => {
	API.post("caption/", { tagToCaption }).then(res => {
		console.log(res);
		const tagToCaptionResponse = res.status;
		dispatch({
			type: POST_TAGS_TO_CAPTION,
			payload: tagToCaptionResponse
		});
	});
};
export const getTags = () => dispatch => {
	API.get("tag/").then(res => {
		console.log(res);
		const tags = res.data.data.tags;
		dispatch({
			type: GET_TAGS,
			payload: tags
		});
	});
};
export const getCaptions = () => dispatch => {
	API.get("caption/").then(res => {
		console.log(res);
		const captions = res.data.data.captions;
		dispatch({
			type: GET_CAPTIONS,
			payload: captions
		});
	});
};
export const postCaptionWithTag = captionWithTag => dispatch => {
	API.post("caption/multi", { captionWithTag }).then(res => {
		console.log(res);
		const captionWithTagResponse = res.status;
		dispatch({
			type: POST_CAPTION_WITH_TAG,
			payload: captionWithTagResponse
		});
	});
};
export const getCaptionUnderTag = tagId => dispatch => {
	API.get("caption/withTag?tagId=" + tagId).then(res => {
		console.log(res);
		const captionUnderTag = res.data.captions;
		dispatch({
			type: GET_CAPTIONS_UNDER_TAG,
			payload: captionUnderTag
		});
	});
};
export const getCationWithTags = tags => dispatch => {
	API.post("caption/", { tags }).then(res => {
		console.log(res);
		const captionWithTags = res.data.captions;
		dispatch({
			type: GET_CAPTION_WITH_TAGS,
			payload: captionWithTags
		});
	});
};
