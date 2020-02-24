import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./containers/Cards";
import Search from "./components/Search";
import Tags from "./containers/Tags";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Search />
				<Tags />
				<Cards />
				<Footer />
			</div>
		);
	}
}

export default App;
