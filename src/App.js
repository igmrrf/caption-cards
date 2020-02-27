import React from "react";
import Cards from "./containers/Cards";
import Search from "./components/Search";
import Tags from "./containers/Tags";
import Banner from "./components/Banner";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Banner />
				<Search />
				<Tags />
				<Cards />
			</div>
		);
	}
}

export default App;
