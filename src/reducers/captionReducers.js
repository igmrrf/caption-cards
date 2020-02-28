import {
	POST_CAPTION,
	POST_TAG,
	POST_TAGS_TO_CAPTION,
	GET_TAGS,
	GET_CAPTIONS,
	POST_CAPTION_WITH_TAG,
	GET_CAPTIONS_UNDER_TAG,
	GET_CAPTION_WITH_TAGS
} from "../actions/type";

const initialState = {
	captionResponse: "",
	tagResponse: "",
	tagToCaptionResponse: "",
	tags: [],
	captions: [],
	captionWithTagResponse: "",
	captionsUnderTag: [],
	captionWithTags: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case POST_CAPTION:
			return {
				...state,
				captionResponse: action.payload
			};
		case POST_TAG:
			return {
				...state,
				tagResponse: action.payload
			};
		case POST_TAGS_TO_CAPTION:
			return {
				...state,
				tagToCaptionResponse: action.payload
			};
		case GET_TAGS:
			return {
				...state,
				tags: action.payload
			};
		case GET_CAPTIONS:
			return {
				...state,
				captions: action.payload
			};
		case POST_CAPTION_WITH_TAG:
			return {
				...state,
				captionWithTagResponse: action.payload
			};
		case GET_CAPTIONS_UNDER_TAG:
			return {
				...state,
				captionsUnderTag: action.payload
			};
		case GET_CAPTION_WITH_TAGS:
			return {
				...state,
				captionWithTags: action.payload
			};
		default:
			return state;
	}
}
