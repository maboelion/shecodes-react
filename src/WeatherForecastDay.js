import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = date.getDay();
		return days[day];
	}

	return (
		<div className="WeatherForecastDay">
			<div>{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} />
			<div className="forecast-temp">
				<span>{Math.round(props.data.temp.min)}</span>° |{" "}
				<strong>
					<span>{Math.round(props.data.temp.max)}</span>°
				</strong>
			</div>
		</div>
	);
}
