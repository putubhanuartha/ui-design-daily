import React from "react";

export default function Day_1585() {
	return (
		<div className="text-xl m-auto max-w-4xl w-full bg-baseCardBackground flex rounded-lg overflow-clip">
			<div className="h-full w-[30%] bg-sidebarBackground">
				<div className="pt-10 pb-4 px-7">
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
							<li>
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
							<li>
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
							<li>
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
							<li>
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
							<li>
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
				<button></button>
			</div>
			<div className="h-full w-[70%]"></div>
		</div>
	);
}
