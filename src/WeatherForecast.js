import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div>Mon</div>
					<WeatherIcon code="01d" />
					<div>
						<span>10</span>° |{" "}
						<strong>
							<span>15</span>°
						</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
