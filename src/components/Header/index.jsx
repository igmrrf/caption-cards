import React from "react";
import {
	Container,
	Nav,
	Form,
	FormControl,
	Button,
	Navbar,
	Dropdown,
	ButtonGroup
} from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export default function index() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			bg="primary"
			sticky="top"
		>
			<Container fluid>
				<Navbar.Brand href="/" className="brand">
					<img src={logo} alt="logo" className="nav-brand-img" />

					<h1>CaptionCards</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Form inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="search-input mr-sm-2"
						/>
						<Button variant="outline-primary" className="navbar-search-button">
							Search
						</Button>
					</Form>
					<Nav className="ml-auto">
						<Nav.Link href="/browse" className="current">
							Browse
						</Nav.Link>
						<Nav.Link href="/random">Random</Nav.Link>
						<Nav.Link href="/random">Random</Nav.Link>
						{/* <Dropdown as={ButtonGroup}>
							<Dropdown.Toggle
								split
								id="dropdown-split-basic"
								className="contribute"
							>
								Contribute
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#contributeTag">Add Tags</Dropdown.Item>
								<Dropdown.Item href="#contributeCaption">
									Add Captions
								</Dropdown.Item>
								<Dropdown.Item href="/contribute">
									Add Caption with Tag(s)
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>*/}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
