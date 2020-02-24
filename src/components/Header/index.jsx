import React from "react";
import {
	Container,
	Nav,
	Form,
	FormControl,
	Button,
	Navbar
} from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export default function index() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light">
			<Container>
				<Navbar.Brand href="/" className="brand">
					<img src={logo} alt="logo" className="nav-brand-img" />

					<p>CaptionCards</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Form inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="search-input mr-sm-2"
						/>
						<Button variant="outline-dark" className="navbar-search-button">
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
