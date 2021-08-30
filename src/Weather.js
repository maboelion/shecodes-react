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
						<input type="search" placeholder="Enter a city..." autofocus="on" />
					</div>
					<div className="col-3">
						<input className="btn btn-dark" type="submit" value="Search" />
					</div>
					<div className="col-3">
						<button className="btn btn-dark">Current</button>
					</div>
				</div>
			</form>
			<div className="row">
				<div className="col-4">
					<h2>New York</h2>
					<ul>
						<li>Monday 13:47</li>
						<li>Cloudy</li>
						<li>
							<img
								src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
								alt="Cloudy"
							/>
						</li>
					</ul>
				</div>
				<div className="col-4">
					<ul>
						<li>
							<h3>20°</h3>
						</li>
						<li>°C | °F</li>
					</ul>
				</div>
				<div className="col-4">
					<ul>
						<li>Sunrise Time: 08:00</li>
						<li>Sunset Time: 20:00</li>
						<li>Humidity: 80%</li>
						<li>Wind: 13km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
