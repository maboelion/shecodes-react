import React, { useState, useEffect } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	const [ready, setReady] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setReady(false);
	}, [props.coords]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setReady(true);
	}

	if (ready) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index > 0 && index < 6) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		const apiKey = "2e89a04024db72cc7535c8c26493e6a5";
		let lat = props.coords.lat;
		let lon = props.coords.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
