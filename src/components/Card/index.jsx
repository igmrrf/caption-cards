import React from "react";
import { Card, Button } from "react-bootstrap";

export default function index(props) {
	return (
		<Card className="single-card">
			<Card.Header>{props.tag}</Card.Header>
			<Card.Body>
				<Card.Title>{props.caption}</Card.Title>
			</Card.Body>
			<Card.Footer className="text-muted ">
				<Button variant="danger">view more</Button>
			</Card.Footer>
		</Card>
	);
}
