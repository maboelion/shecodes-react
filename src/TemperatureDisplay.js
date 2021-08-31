import React, { useState } from "react";

export default function TemperatureDisplay(props) {
	const [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<div className="TemperatureDisplay">
				<ul>
					<li>
						<h3>{props.celsius}°</h3>
					</li>
					<li>
						{props.min}°C | <strong>{props.max}°C</strong>
					</li>
					<li className="mt-4">
						<button className="btn btn-light" onClick={showFahrenheit}>
							Fahrenheit
						</button>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="TemperatureDisplay">
				<ul>
					<li>
						<h3>{Math.round(props.celsius * 1.8 + 32)}°</h3>
					</li>
					<li>
						{Math.round(props.min * 1.8 + 32)}°F |{" "}
						<strong>{Math.round(props.max * 1.8 + 32)}°F</strong>
					</li>
					<li className="mt-4">
						<button className="btn btn-light" onClick={showCelsius}>
							Celsius
						</button>
					</li>
				</ul>
			</div>
		);
	}
}
