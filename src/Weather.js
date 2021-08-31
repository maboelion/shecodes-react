import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.city);

	function handleResponse(response) {
		setWeatherData({
			city: props.city,
			ready: true,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
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
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-6">
							<input
								type="search"
								placeholder="Enter a city..."
								autofocus="on"
								className="form-control w-100"
							/>
						</div>
						<div className="col-3">
							<input
								className="btn btn-dark w-100"
								type="submit"
								value="Search"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-3">
							<button className="btn btn-dark w-100">Current</button>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
