import React from "react";
import Cards from "./components/Card";
import Search from "./components/Search";
import Tags from "./components/Tags";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Banner />
				<Search />
				<Carousel />
				<Tags />
				<Cards />
			</div>
		);
	}
}

export default App;
