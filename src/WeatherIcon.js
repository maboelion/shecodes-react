import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSun,
	faMoon,
	faCloudSun,
	faCloudMoon,
	faCloud,
	faCloudShowersHeavy,
	faCloudSunRain,
	faCloudMoonRain,
	faBolt,
	faSnowflake,
	faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon(props) {
	const allCodes = {
		"01d": <FontAwesomeIcon icon={faSun} />,
		"01n": <FontAwesomeIcon icon={faMoon} />,
		"02d": <FontAwesomeIcon icon={faCloudSun} />,
		"02n": <FontAwesomeIcon icon={faCloudMoon} />,
		"03d": <FontAwesomeIcon icon={faCloud} />,
		"03n": <FontAwesomeIcon icon={faCloud} />,
		"04d": <FontAwesomeIcon icon={faCloudSun} />,
		"04n": <FontAwesomeIcon icon={faCloudMoon} />,
		"09d": <FontAwesomeIcon icon={faCloudShowersHeavy} />,
		"09n": <FontAwesomeIcon icon={faCloudShowersHeavy} />,
		"10d": <FontAwesomeIcon icon={faCloudSunRain} />,
		"10n": <FontAwesomeIcon icon={faCloudMoonRain} />,
		"11d": <FontAwesomeIcon icon={faBolt} />,
		"11n": <FontAwesomeIcon icon={faBolt} />,
		"13d": <FontAwesomeIcon icon={faSnowflake} />,
		"13n": <FontAwesomeIcon icon={faSnowflake} />,
		"50d": <FontAwesomeIcon icon={faSmog} />,
		"50n": <FontAwesomeIcon icon={faSmog} />,
	};

	return <span>{allCodes[props.code]}</span>;
}
