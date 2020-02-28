import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTags } from "../../actions/captionAction";
import Tags from "../Tags/Tag";
import { Form, Button } from "react-bootstrap";

class index extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ""
		};
		this.onSearch = this.onSearch.bind(this);
	}
	componentDidMount() {
		this.props.getTags();
	}
	onSearch = e => {
		this.setState({ search: e.target.value });
		console.log(this.state.search);
	};
	render() {
		let filteredTags = this.props.tags.filter(tag => {
			if (this.state.search === "") {
				return null;
			} else {
				return tag.toLowerCase().indexOf(this.state.search) !== -1;
			}
		});

		return (
			<div>
				<h1>Filter</h1>
				<Form>
					<Form.Group controlId="selectTagOrCaptions" className="tag-caption">
						<Form.Check type="checkbox" label="All Tags" />
						<Form.Check type="checkbox" label="All Captions" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Search Tags</Form.Label>
						<Form.Control
							placeholder="Enter keyword(s)"
							onChange={this.onSearch}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Search Captions</Form.Label>
						<Form.Control
							placeholder="Enter keyword(s)"
							onChange={this.onSearch}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="browse-search">
						Submit
					</Button>
				</Form>
				<Tags tags={filteredTags} />
			</div>
		);
	}
}

index.propTypes = {
	getTags: PropTypes.func.isRequired,
	Tags: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	tags: state.captions.tags
});
export default connect(mapStateToProps, { getTags })(index);
