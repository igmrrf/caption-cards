import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const SearchPage = () => {
	return (
		<MDBCol md="6" className="search">
			<MDBInput hint="Search" type="text" containerClass="mt-0" />
		</MDBCol>
	);
};

export default SearchPage;
