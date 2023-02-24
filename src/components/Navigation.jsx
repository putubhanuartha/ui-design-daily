import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiUpArrow } from "react-icons/bi";
export default function Navigation() {
	return (
		<div className="m-auto">
			<div id="outline">
				<Outlet />
			</div>

			<nav className="fixed flex flex-col items-center bottom-0 left-[50%] translate-y-24 hover:translate-y-0 transition-transform duration-300 translate-x-[-50%] bg-[#ffeded] px-3 h-32 overflow-y-scroll rounded-lg shadow-lg">
				<i>
					<BiUpArrow size={30} />
				</i>
				<ul className="flex gap-y-2 py-2 justify-center flex-col items-center">
					<li>
						<Link
							to={"/"}
							className="underline"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to={"/day-1585"}
							className="underline"
						>
							UI Design Day 1585
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
