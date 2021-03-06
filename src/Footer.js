import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="Footer">
			<p>
				<a
					href="https://github.com/maboelion/shecodes-react"
					target="_blank"
					rel="noreferrer noopener"
				>
					Open-source code
				</a>{" "}
				by Mareike for SheCodes. Hosted on{" "}
				<a
					href="https://www.netlify.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					Netlify
				</a>
				.
			</p>
		</div>
	);
}
