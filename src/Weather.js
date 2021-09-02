import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.city);

	function handleResponse(response) {
		setWeatherData({
			name: city,
			coords: response.data.coord,
			ready: true,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			temperature: Math.round(response.data.main.temp),
			min: Math.round(response.data.main.temp_min),
			max: Math.round(response.data.main.temp_max),
			sunrise: new Date(response.data.sys.sunrise * 1000),
			sunset: new Date(response.data.sys.sunset * 1000),
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed * 3.6),
		});
	}

	function search() {
		const apiKey = "2e89a04024db72cc7535c8c26493e6a5";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<h1>Weather App</h1>
				<hr noshade width="300" size="3" />
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-md-6 mt-1">
							<input
								type="search"
								placeholder="Enter a city..."
								autoFocus="on"
								className="form-control w-100"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-md-3 mt-1">
							<input
								className="btn btn-dark w-100"
								type="submit"
								value="Search"
							/>
						</div>
						<div className="col-md-3 mt-1">
							<button className="btn btn-dark w-100">Current</button>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} city={city} />
				<WeatherForecast coords={weatherData.coords} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
