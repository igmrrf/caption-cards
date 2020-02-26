import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import API from "../../api";

export default class index extends React.Component {
	constructor() {
		super();
		this.state = {
			caption: "",
			tag: "",
			success: false,
			errMessage: ""
		};
	}
	onWriteChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitCaption = () => {
		API.post("caption/").then(res => {
			console.log(res);
			console.log(res.data);
		});
	};
	render() {
		const { caption, tag, success, errMessage } = this.state;
		return (
			<Container>
				<Row>
					<Col md={5}>
						<div className="contribute-form" data-aos="slide-left">
							<Form>
								<Form.Group>
									<Form.Label>
										<h3 className="title">Contribute to Caption Cards</h3>
									</Form.Label>
								</Form.Group>

								<Form.Group>
									<Form.Control
										id="caption"
										as="textarea"
										rows="5"
										type="text"
										name="caption"
										placeholder="Enter Caption"
										onChange={this.onWriteChange}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										id="tag"
										type="text"
										name="tag"
										placeholder="Enter Tag(s)"
										onChange={this.onWriteChange}
									/>
								</Form.Group>
								<button
									name="submit"
									type="submit"
									onClick={this.onSubmitCaption}
									className="blue-button"
								>
									Submit Review
								</button>
							</Form>
						</div>
					</Col>
					<Col md={4}>
						<Card className="single-card">
							<Card.Header>{tag}</Card.Header>
							<Card.Body>
								<Card.Title>{caption}</Card.Title>
							</Card.Body>
							<Card.Footer className="text-muted ">
								<Button variant="danger">view more</Button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
