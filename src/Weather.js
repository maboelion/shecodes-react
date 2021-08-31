import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Weekday from "./Weekday";

export default function Weather(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		setWeatherData({
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

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<h1>Weather App</h1>
				<form>
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
							/>
						</div>
						<div className="col-3">
							<button className="btn btn-dark w-100">Current</button>
						</div>
					</div>
				</form>
				<div className="weather-display">
					<div className="row">
						<div className="col-4">
							<h2>{props.city}</h2>
							<ul>
								<li>
									<Weekday date={weatherData.date} />
									<FormattedDate date={weatherData.date} />
								</li>
								<li className="mt-3 ms-4">
									<img src={weatherData.icon} alt={weatherData.description} />
									<br />
									<small className="ms-2 text-capitalize">
										{weatherData.description}
									</small>
								</li>
							</ul>
						</div>
						<div className="col-4 text-center">
							<ul>
								<li>
									<h3>{weatherData.temperature}°</h3>
								</li>
								<li>
									{weatherData.min}°C | <strong>{weatherData.max}°C</strong>
								</li>
								<li className="mt-4">
									<button className="btn btn-light">Fahrenheit</button>
								</li>
							</ul>
						</div>
						<div className="col-4 text-end mt-4">
							<ul>
								<li>
									Sunrise Time: <FormattedDate date={weatherData.sunrise} />
								</li>
								<li>
									Sunset Time: <FormattedDate date={weatherData.sunset} />
								</li>
								<li className="mt-4">Humidity: {weatherData.humidity}%</li>
								<li>Wind: {weatherData.wind}km/h</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "2e89a04024db72cc7535c8c26493e6a5";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
