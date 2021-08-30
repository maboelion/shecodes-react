import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather App</h1>
				<Search />
				<Footer />
			</div>
		</div>
	);
}
