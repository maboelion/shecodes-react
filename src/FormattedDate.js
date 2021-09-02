import React from "react";

export default function FormattedDate(props) {
	let now = new Date(props.date * 1000 + props.timezone * 1000 - 7200 * 1000);
	let hours = now.getHours();
	let minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (hours < 10) {
		hours = `0${hours}`;
	}
	return (
		<span>
			{hours}:{minutes}
		</span>
	);
}
