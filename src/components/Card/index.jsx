import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";
import { getCaptions } from "../../actions/captionAction";
import { Container, Row, Col } from "react-bootstrap";

export class index extends Component {
	UNSAFE_componentWillMount() {
		console.log("ComponentWillMount");
		this.props.getCaptions();
	}

	render() {
		const captionCaptions = this.props.captions.map(caption => (
			<Card key={caption.id} caption={caption.caption} id={caption.id} />
		));
		return (
			<Container>
				<Row>
					<Col>
						<h1>Caption Cards</h1>
						<div className="Cards">{captionCaptions}</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
index.propTypes = {
	getCaptions: PropTypes.func.isRequired,
	Captions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	captions: state.captions.captions
});

export default connect(mapStateToProps, { getCaptions })(index);
