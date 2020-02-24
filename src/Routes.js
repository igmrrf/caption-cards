import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App} />
				</Switch>
			</Router>
		);
	}
}

export default Routes;




