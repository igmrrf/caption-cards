import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardForm from "../Card/Card";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postCaption } from "../../actions/captionAction";

class index extends React.Component {
	constructor() {
		super();
		this.state = {
			caption: "",
			success: false,
			errMessage: ""
		};
		this.onWriteChange = this.onWriteChange.bind(this);
		this.onSubmitCaption = this.onSubmitCaption.bind(this);
	}

	onWriteChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitCaption = e => {
		e.preventDefault();
		if (!this.state.caption) {
			this.setState({ errMessage: "Caption field cannot be blank" });
		} else {
			const captionWithTagData = {
				caption: this.state.caption,
				tag: this.state.tag
			};
			this.props.postCaptionWithTag(captionWithTagData);
			this.setState({ success: true });
		}
	};
	render() {
		const { caption, success, errMessage } = this.state;
		return (
			<Container className="contribute-form">
				<Row>
					<Col md={6} lg={6}>
						<div data-aos="slide-left">
							<Form>
								<Form.Group>
									<Form.Label>
										<h3 className="title">Contribute to Caption Cards</h3>
									</Form.Label>
								</Form.Group>
								<div className="text-danger font-weight-bolder">
									{errMessage}
								</div>

								{success && (
									<div className="text-success font-weight-bolder">
										Your caption has been successfully uploaded to the database
									</div>
								)}

								<Form.Group>
									<Form.Control
										id="caption"
										as="textarea"
										rows="5"
										type="text"
										name="caption"
										placeholder="Enter Caption"
										onChange={this.onWriteChange}
									/>
								</Form.Group>

								<button
									name="submit"
									type="submit"
									onClick={this.onSubmitCaption}
									className="tertiary-button"
								>
									Submit
								</button>
							</Form>
						</div>
					</Col>
					<Col md={1} lg={1}></Col>
					<Col md={3} lg={4} className="mx-2 ">
						<CardForm caption={caption} />
					</Col>
				</Row>
			</Container>
		);
	}
}

index.propTypes = {
	postCaption: PropTypes.func.isRequired
};

export default connect(null, { postCaption })(index);
