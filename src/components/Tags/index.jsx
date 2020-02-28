import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTags } from "../../actions/captionAction";
import CancelIcon from "@material-ui/icons/Cancel";

class index extends Component {
	componentDidMount() {
		this.props.getTags();
	}
	render() {
		const tagsTags = this.props.tags.map(tag => (
			<div className="single-tag">
				<p>{tag}</p>
				<CancelIcon className="icon my-auto" />
			</div>
		));
		return <div className="Tags">{tagsTags}</div>;
	}
}

index.propTypes = {
	getTags: PropTypes.func.isRequired,
	Tags: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	tags: state.captions.tags
});
export default connect(mapStateToProps, { getTags })(index);
