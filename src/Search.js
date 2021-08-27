import React, { useState } from "react";
import axios from "axios";

export default function Search() {
	const [city, setCity] = useState("");
	const [temp, setTemp] = useState(null);
	const [description, setDescription] = useState("");
	const [humidity, setHumidity] = useState(null);
	const [wind, setWind] = useState(null);
	const [iconUrl, setIconUrl] = useState("");

	function displayWeather(response) {
		console.log(response.data);

		setTemp(Math.round(response.data.main.temp));
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(Math.round(response.data.wind.speed * 3.6));
		setIconUrl(
			`http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
		);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3b478c1272c318ae84892336587ae67c`;
		axios.get(apiUrl).then(displayWeather);
	}
	return (
		<div className="Search">
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					placeholder="Enter a city..."
					autofocus="on"
					onChange={updateCity}
				/>
				<input type="submit" value="Search" />
				<button type="button">Current location</button>
			</form>

			<ul>
				<li>Temperature: {temp}°C</li>
				<li>Decription: {description}</li>
				<li>Humidity: {humidity}%</li>
				<li>Wind: {wind}km/h</li>
				<li>
					<img src={iconUrl} alt="weather icon" />
				</li>
			</ul>
		</div>
	);
}
