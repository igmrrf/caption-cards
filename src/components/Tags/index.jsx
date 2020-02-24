import React, { Component } from "react";
import CancelIcon from "@material-ui/icons/Cancel";

export default class index extends Component {
	render() {
		return (
			<div className="single-tag">
				<p>Tag</p>
				<CancelIcon className="icon my-auto" />
			</div>
		);
	}
}
