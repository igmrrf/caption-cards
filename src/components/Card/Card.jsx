import React from "react";
import { Card } from "react-bootstrap";
import MyVerticallyCenteredModal from "./Modal";

export default function UltimateCard(props) {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<Card className="single-card">
			<Card.Header>CaptionCards</Card.Header>
			<Card.Body>
				<Card.Title>{props.caption}</Card.Title>
			</Card.Body>
			<Card.Footer className="text-muted ">
				<div className="tertiary-button" onClick={() => setModalShow(true)}>
					Add Tag
				</div>
				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				ID:{props.id}
				<div className="mx-auto">{props.tags}</div>
			</Card.Footer>
		</Card>
	);
}
