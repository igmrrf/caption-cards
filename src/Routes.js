import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contribute from "./containers/Contribute";
import Browse from "./containers/Browse";
import Random from "./containers/Random";
import Favorites from "./containers/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch >
					<Route exact path="/" component={App} />
					<Route exact path="/contribute" component={Contribute} />
					<Route exact path="/browse" component={Browse} />
					<Route exact path="/random" component={Random} />
					<Route exact path="/favorites" component={Favorites} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default Routes;
