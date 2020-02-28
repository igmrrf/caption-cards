import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardForm from "../Card/Card";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	postCaption,
	postCaptionWithTag,
	postTags
} from "../../actions/captionAction";

class index extends React.Component {
	constructor() {
		super();
		this.state = {
			tagOnly: false,
			captionOnly: false,
			captionWithTag: true,
			caption: "",
			tag: "",
			success: true,
			errMessage: ""
		};
		this.onWriteChange = this.onWriteChange.bind(this);
		this.onSubmitCaption = this.onSubmitCaption.bind(this);
	}
	onCheck(e) {
		console.log("Console Logging"); 
	}
	onWriteChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitCaption = e => {
		e.preventDefault();
		if (!this.state.tag && !this.state.caption) {
			this.setState({ errMessage: "Both fields cannot be blank" });
		} else if (this.state.tag === "") {
			const captionData = {
				caption: this.state.caption
			};
			this.props.postCaption(captionData);
			this.setState({ success: true });
		} else if (this.state.caption === "") {
			const tagData = {
				tag: this.state.tag
			};
			this.props.postTags(tagData);
			this.setState({ success: true });
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
		const {
			caption,
			tag,
			success,
			errMessage,
			tagOnly,
			captionOnly,
			captionWithTag
		} = this.state;
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
						<CardForm tags={tag} caption={caption} />
					</Col>
				</Row>
			</Container>
		);
	}
}

index.propTypes = {
	postCaption: PropTypes.func.isRequired,
	postTags: PropTypes.func.isRequired,
	postCaptionWithTag: PropTypes.func.isRequired
};

export default connect(null, { postCaption, postCaptionWithTag, postTags })(
	index
);
