import React from "react";
import { useState, useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
export default function Day_1585(props) {
	const [index, setIndex] = useState(-1);
	useEffect(() => {
		document.title = `${props.title}`;
	}, []);
	return (
		<div className="text-xl container m-auto max-w-6xl w-full bg-baseCardBackground flex rounded-lg overflow-clip">
			<div className="pt-11 pb-9 w-[20%] bg-sidebarBackground px-7 flex flex-col items-start justify-between">
				<div>
					<figure className="gap-3">
						<img
							src="/assets/person.png"
							alt=""
						/>
						<figcaption>
							<p className="text-base font-bold">Ildiko Gaspar</p>
							<p className="text-base text-secondaryTextColor">@igaspar</p>
						</figcaption>
					</figure>
					<nav className="mt-12">
						<ul className="flex flex-col gap-4">
							<li
								className="flex gap-x-1 overflow-hidden"
								onClick={() => {
									setIndex(0);
								}}
							>
								<div
									className={`h-8 w-1 ${
										index === 0 ? "translate-y-0" : "translate-y-full"
									} rounded-md bg-primaryColor transition-transform duration-200`}
								></div>
								<a
									href="#"
									className="w-fit block"
								>
									<figure className="gap-3">
										<img
											src="/assets/general.png"
											alt="general"
										/>
										<figcaption className="text-base text-secondaryTextColor">
											General
										</figcaption>
									</figure>
								</a>
							</li>
							<li
								className="flex gap-x-1 overflow-hidden"
								onClick={() => {
									setIndex(1);
								}}
							>
								<div
									className={`h-8 w-1 ${
										index === 1 ? "translate-y-0" : "translate-y-full"
									} rounded-md bg-primaryColor transition-transform duration-200`}
								></div>
								<a
									href="#"
									className="w-fit block"
								>
									<figure className="gap-3">
										<img
											src="/assets/billing.png"
											alt="billing"
										/>
										<figcaption className="text-base text-secondaryTextColor">
											Billing
										</figcaption>
									</figure>
								</a>
							</li>
							<li
								className="flex gap-x-1 overflow-hidden"
								onClick={() => {
									setIndex(2);
								}}
							>
								<div
									className={`h-8 w-1 ${
										index === 2 ? "translate-y-0" : "translate-y-full"
									} rounded-md bg-primaryColor transition-transform duration-200`}
								></div>
								<a
									href="#"
									className="w-fit block"
								>
									<figure className="gap-3">
										<img
											src="/assets/invitations.png"
											alt="invitations"
										/>
										<figcaption className="text-base text-secondaryTextColor">
											Invitations
										</figcaption>
									</figure>
								</a>
							</li>
							<li
								className="flex gap-x-1 overflow-hidden"
								onClick={() => {
									setIndex(3);
								}}
							>
								<div
									className={`h-8 w-1 ${
										index === 3 ? "translate-y-0" : "translate-y-full"
									} rounded-md bg-primaryColor transition-transform duration-200`}
								></div>
								<a
									href="#"
									className="w-fit block"
								>
									<figure className="gap-3">
										<img
											src="/assets/password.png"
											alt="password"
										/>
										<figcaption className="text-base text-secondaryTextColor">
											Password
										</figcaption>
									</figure>
								</a>
							</li>
							<li
								className="flex gap-x-1 overflow-hidden"
								onClick={() => {
									setIndex(4);
								}}
							>
								<div
									className={`h-8 w-1 ${
										index === 4 ? "translate-y-0" : "translate-y-full"
									} rounded-md bg-primaryColor transition-transform duration-200`}
								></div>
								<a
									href="#"
									className="w-fit block"
								>
									<figure className="gap-3">
										<img
											src="/assets/apps.png"
											alt="apps"
										/>
										<figcaption className="text-base text-secondaryTextColor">
											Apps
										</figcaption>
									</figure>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<button>
					<figure className="flex gap-3">
						<i>
							<IoLogOutOutline />
						</i>
						<figcaption className="text-base">Log out</figcaption>
					</figure>
				</button>
			</div>
			<div className="h-full px-8 pt-11 pb-9">
				<h1 className="font-bold text-xl">Billing</h1>
				<div className="flex mt-14 gap-12">
					<div>
						<div>
							<p className="font-bold text-base">Order history</p>
							<p className="text-sm text-gray-500">
								Manage billing information and view reciepts
							</p>
						</div>
						<div className="mt-4">
							<table class="table-fixed w-full max-w-xl">
								<colgroup>
									<col
										span="1"
										style={{ width: "30%" }}
									/>
									<col
										span="1"
										style={{ width: "50%" }}
									/>
									<col
										span="1"
										style={{ width: "20%" }}
									/>
								</colgroup>
								<thead>
									<tr>
										<th>Date</th>
										<th>Type</th>
										<th>Receipt</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Oct. 21, 2021</td>
										<td>Pro Annual</td>
										<td>
											<button>Download</button>
										</td>
									</tr>
									<tr>
										<td>Aug. 21, 2921</td>
										<td>Pro Portfolio</td>
										<td>
											<button>Download</button>
										</td>
									</tr>
									<tr>
										<td>July. 21, 2021</td>
										<td>Sponsored Post</td>
										<td>
											<button>Download</button>
										</td>
									</tr>
									<tr>
										<td>Jun. 21, 2021</td>
										<td>Sponsored Post</td>
										<td>
											<button>Download</button>
										</td>
									</tr>
								</tbody>
							</table>
							<a
								href="#"
								className="text-orange-400 underline text-sm"
							>
								Load more
							</a>
						</div>
					</div>
					<div className="p-5 bg-primaryColor h-fit rounded-lg">
						<p className="text-white text-sm">Your plan</p>
						<div className="mt-4">
							<p className="text-white text-base font-bold">Pro Annual</p>
							<p className="text-xs mt-1 text-white">Renews on Nov, 2021</p>
						</div>
						<button className="mt-4 text-base px-3 py-1 text-white border-[0.2px] border-[rgba(255,255,255,0.5)] rounded-lg">
							cancel subcription
						</button>
					</div>
				</div>
				<div className="mt-12">
					<div>
						<p className="text-base font-bold">Payment Method</p>
						<p className="text-sm text-gray-500">
							Manage billing information and view receips
						</p>
					</div>
					<div className="flex items-center w-full max-w-xl justify-between mt-3">
						<div className="flex items-center gap-4">
							<img
								src="/assets/visa.png"
								alt=""
							/>
							<p className="text-sm">Visa ending in 2255</p>
						</div>
						<button className="text-sm px-2.5 py-1.5 border border-[rgba(112,112,112,0.4)] rounded-lg">
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
