import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import { fetchCaptions } from "../../actions/captionAction";
import { Container, Row, Col } from "react-bootstrap";

export class index extends Component {
	UNSAFE_componentWillMount() {
		console.log("ComponentWillMount");
		this.props.fetchCaptions();
	}

	render() {
		const captionCaptions = this.props.captions.map(caption => (
			<Card key={caption.id} caption={caption.caption} tag={caption.id} />
		));
		return (
			<Container>
				<h1>Cards in the Databse</h1>
				<div className="Cards">{captionCaptions}</div>
			</Container>
		);
	}
}
index.propTypes = {
	fetchCaptions: PropTypes.func.isRequired,
	Captions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	captions: state.captions.captions
});

export default connect(mapStateToProps, { fetchCaptions })(index);
