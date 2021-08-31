import React from "react";
import FormattedDate from "./FormattedDate";
import Weekday from "./Weekday";
import WeatherIcon from "./WeatherIcon";
import TemperatureDisplay from "./TemperatureDisplay";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="weather-display">
				<div className="row">
					<div className="col-4">
						<h2 className="text-capitalize">{props.data.name}</h2>
						<ul>
							<li>
								<Weekday date={props.data.date} />{" "}
								<FormattedDate date={props.data.date} />
							</li>
							<li className="mt-2">
								<div className="ms-3">
									<WeatherIcon code={props.data.icon} />
								</div>
								<small className="text-capitalize">
									{props.data.description}
								</small>
							</li>
						</ul>
					</div>
					<div className="col-4 text-center">
						<TemperatureDisplay
							celsius={props.data.temperature}
							min={props.data.min}
							max={props.data.max}
						/>
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
