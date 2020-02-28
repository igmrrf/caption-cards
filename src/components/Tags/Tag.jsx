import React, { Component } from "react";

class index extends Component {
	render() {
		const tagsTags = this.props.tags.map(tag => (
			<div className="single-tag">
				<p>{tag}</p>
			</div>
		));
		return <div className="Tags">{tagsTags}</div>;
	}
}

export default index;
