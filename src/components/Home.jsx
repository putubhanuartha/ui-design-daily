import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="m-auto w-full max-w-lg bg-baseCardBackground rounded-lg p-8 shadow-lg">
			<h1 className="text-2xl text-center">Homepage</h1>
			<h3 className="text-lg text-center mt-2">
				In this page you can see components that i just already build based on{" "}
				<a
					target="_blank"
					className="text-gray-500 italic underline"
					href="https://uidesigndaily.com/"
				>
					ui design daily
				</a>{" "}
				design mockup
			</h3>
			<p className="mt-2 text-lg text-center">
				Some or all of the design may not responsive because i just follow
				design based on figma from ui design daily
			</p>
			<button className="mx-auto mt-2 block px-2 py-1 border border-[rgba(101,96,96,0.5)] rounded-md ">
				components
			</button>
		</div>
	);
}
