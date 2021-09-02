import React from "react";

export default function FormattedDate(props) {
	let now = new Date(props.date * 1000 + props.timezone * 1000 - 7200 * 1000);
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[now.getDay()];

	return <span>{day}</span>;
}
