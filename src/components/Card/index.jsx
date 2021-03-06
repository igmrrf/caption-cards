import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";
import { getCaptions } from "../../actions/captionAction";
import { Container, Row, Col } from "react-bootstrap";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
	}
	UNSAFE_componentWillMount() {
		console.log("ComponentWillMount");
		this.props.getCaptions();
	}

	render() {
		let filteredCaptions = this.props.captions.filter(caption => {
			return caption.caption.toLowerCase().indexOf(this.state.search) !== -1;
		});
		const captionCaptions = filteredCaptions.map(caption => {
			if (caption.id > 20) {
				return null;
			} else {
				return (
					<Card key={caption.id} caption={caption.caption} id={caption.id} />
				);
			}
		});
		return (
			<Container>
				<Row>
					<Col>
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
