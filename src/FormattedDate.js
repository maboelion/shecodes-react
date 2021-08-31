import React from "react";

export default function FormattedDate(props) {
	let hours = props.date.getHours();
	let minutes = props.date.getMinutes();
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
