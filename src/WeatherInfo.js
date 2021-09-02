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
					<div className="col-md-4">
						<h2 className="text-capitalize">{props.data.name}</h2>
						<ul>
							<li>
								<Weekday
									date={props.data.date}
									timezone={props.data.timezone}
								/>
								{" ~"}
								<FormattedDate
									date={props.data.date}
									timezone={props.data.timezone}
								/>
							</li>
							<li className="mt-2">
								<div className="weather-icon">
									<WeatherIcon code={props.data.icon} />
								</div>
								<small className="text-capitalize">
									{props.data.description}
								</small>
							</li>
						</ul>
					</div>
					<div className="col-md-4 text-center">
						<TemperatureDisplay
							celsius={props.data.temperature}
							min={props.data.min}
							max={props.data.max}
						/>
					</div>
					<div className="col-md-4 text-md-end mt-4">
						<ul>
							<li>
								Sunrise Time:{" "}
								<FormattedDate
									date={props.data.sunrise}
									timezone={props.data.timezone}
								/>
							</li>
							<li>
								Sunset Time:{" "}
								<FormattedDate
									date={props.data.sunset}
									timezone={props.data.timezone}
								/>
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
