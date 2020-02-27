import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class index extends Component {
	constructor() {
		super();
		this.state = {
			captions: [],
			caption: "",
			tags: [],
			tag: ""
		};
	}
	componentDidMount() {
		API.get("caption/").then(res => {
			console.log(res);
			console.log(res.data.data.captions);
			const captions = res.data.data.captions;
			this.setState({ captions });
		});
	}
	render() {
		const { captions } = this.state;
		return (
			<Container className="Random">
				<Row>
					<Col>
						<div className="Cards">
							{Object.keys(captions).map((k, i) => {
								let data = captions[k];
								return <Card key={k} tag={data.id} caption={data.caption} />;
							})}
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default index;
