import React from "react";
import { Card, Button } from "react-bootstrap";

export default function index(props) {
	return (
		<Card className="single-card">
			<Card.Header>CaptionCards</Card.Header>
			<Card.Body>
				<Card.Title>{props.caption}</Card.Title>
			</Card.Body>
			<Card.Footer className="text-muted ">
				<div className="tertiary-button">view more</div>
				ID:{props.tag}
			</Card.Footer>
		</Card>
	);
}
