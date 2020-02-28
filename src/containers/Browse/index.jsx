import React from "react";
import Cards from "../../components/Card";
import Filter from "../../components/Filter";
import { Container, Row, Col } from "react-bootstrap";

export default function index() {
	return (
		<div className="App">
			<Container className="Browse">
				<Row>
					<Col md={3} lg={4}>
						<Filter />
					</Col>
					<Col md={6} lg={7}>
						<Cards />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
