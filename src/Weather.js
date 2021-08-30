import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
						<h2>New York</h2>
						<ul>
							<li>Monday 13:47</li>
							<li className="mt-3 ms-4">
								<img
									src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
									alt="Cloudy"
								/>
								<br />
								<small className="ms-2">Cloudy</small>
							</li>
						</ul>
					</div>
					<div className="col-4 text-center">
						<ul>
							<li>
								<h3>20°</h3>
							</li>
							<li>
								19°C | <strong>25°C</strong>
							</li>
							<li className="mt-4">
								<button className="btn btn-light">Fahrenheit</button>
							</li>
						</ul>
					</div>
					<div className="col-4 text-end mt-4">
						<ul>
							<li>Sunrise Time: 08:00</li>
							<li>Sunset Time: 20:00</li>
							<li className="mt-4">Humidity: 80%</li>
							<li>Wind: 13km/h</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
