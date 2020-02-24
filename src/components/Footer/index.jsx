import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
	return (
		<MDBFooter color="indigo" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="4">
						<h3 className="title">Caption Cards</h3>
						<p>
							An api solution for getting and storing captions with certain
							references to tags
						</p>
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Caption Library</h5>
						<ul className="footer-links">
							<li className="footer-link">
								<a href="#!">Documentation</a>
							</li>
							<li className="footer-link">
								<a href="#!">API Sponsor</a>
							</li>
							<li className="footer-link">
								<a href="#!">About</a>
							</li>
							<li className="footer-link">
								<a href="#!">Contact</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Follow Me Everywhere</h5>
						<ul className="footer-links">
							<li className="footer-link">
								<a href="#!">Facebook</a>
							</li>
							<li className="footer-link">
								<a href="#!">Twitter</a>
							</li>
							<li className="footer-link">
								<a href="#!">Github</a>
							</li>
							<li className="footer-link">
								<a href="#!">LinkedIn</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://igmrrf.github.io/me"> IGMRRF </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPage;
