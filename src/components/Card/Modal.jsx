import React from "react";
import { Modal, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postTags } from "../../actions/captionAction";

class MyVerticallyCenteredModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tag: "",
			success: false,
			errMessage: ""
		};
		this.onWriteChange = this.onWriteChange.bind(this);
		this.onSubmitTag = this.onSubmitTag.bind(this);
	}
	onWriteChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitTag = e => {
		e.preventDefault();
		if (!this.state.caption) {
			this.setState({ errMessage: "Caption field cannot be blank" });
		} else {
			const tagData = {
				caption: this.state.caption,
				tag: this.state.tag
			};
			this.props.postTag(tagData);
			this.setState({ success: true });
		}
	};

	render() {
		const { errMessage } = this.state;
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Add Tags to the Caption
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Separate each Tag with a comma</p>
					<Form>
						<div className="text-danger font-weight-bolder">{errMessage}</div>
						<Form.Group>
							<Form.Control
								id="tag"
								type="text"
								name="tag"
								placeholder="Enter Tag(s)"
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
				</Modal.Body>
				<Modal.Footer>
					<button className="tertiary-button" onClick={this.props.onHide}>
						Submit
					</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

MyVerticallyCenteredModal.propTypes = {
	postTag: PropTypes.func.isRequired
};

export default connect(null, { postTags })(MyVerticallyCenteredModal);
