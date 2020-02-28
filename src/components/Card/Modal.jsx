import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
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
					<Form.Group>
						<Form.Control
							id="tag"
							type="text"
							name="tag"
							placeholder="Enter Tag(s)"
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<button className="tertiary-button" onClick={props.onHide}>
					Submit
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default MyVerticallyCenteredModal;
