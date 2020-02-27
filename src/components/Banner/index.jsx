import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function index() {
	return (
		<div className="Banner">
			<Container>
				<Row>
					<Col>
						<h3>Captions Cards</h3>
						<h1>Get into the latest Captions Database</h1>
						<h4>Access, Contribute and Drop your opinions</h4>
					</Col>
				</Row>
			</Container>
			<div className="banner-line"></div>
		</div>
	);
}
