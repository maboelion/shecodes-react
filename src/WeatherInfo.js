import React from "react";
import FormattedDate from "./FormattedDate";
import Weekday from "./Weekday";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="weather-display">
				<div className="row">
					<div className="col-4">
						<h2>{props.data.city}</h2>
						<ul>
							<li>
								<Weekday date={props.data.date} />
								<FormattedDate date={props.data.date} />
							</li>
							<li className="mt-3 ms-4">
								<img src={props.data.icon} alt={props.data.description} />
								<br />
								<small className="ms-2 text-capitalize">
									{props.data.description}
								</small>
							</li>
						</ul>
					</div>
					<div className="col-4 text-center">
						<ul>
							<li>
								<h3>{props.data.temperature}°</h3>
							</li>
							<li>
								{props.data.min}°C | <strong>{props.data.max}°C</strong>
							</li>
							<li className="mt-4">
								<button className="btn btn-light">Fahrenheit</button>
							</li>
						</ul>
					</div>
					<div className="col-4 text-end mt-4">
						<ul>
							<li>
								Sunrise Time: <FormattedDate date={props.data.sunrise} />
							</li>
							<li>
								Sunset Time: <FormattedDate date={props.data.sunset} />
							</li>
							<li className="mt-4">Humidity: {props.data.humidity}%</li>
							<li>Wind: {props.data.wind}km/h</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
