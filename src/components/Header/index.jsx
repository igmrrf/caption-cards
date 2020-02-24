import React from "react";
import {
	Container,
	Row,
	Col,
	Nav,
	Form,
	FormControl,
	Button,
	Navbar
} from "react-bootstrap";

export default function index() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<div className="brand">
					<div className="top-brand"></div>
					<div className="bottom-brand"></div>
				</div>
				<Navbar.Brand href="#home">
					<h2>Caption Cards</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-light" className="navbar-search-button">
							Search
						</Button>
					</Form>
					<Nav className="ml-auto">
						<Nav.Link href="/browse">Browse</Nav.Link>
						<Nav.Link href="/random">Random</Nav.Link>
						<Nav.Link href="/contribute">Contribute</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
