import Day_1585 from "./components/Day_1585";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navigation />,
			children: [
				{
					path: "/day-1585",
					element: <Day_1585 title="UI Design Daily | day 1585" />,
				},
				{ path: "/", element: <Home title="UI Design Daily | Home" /> },
			],
		},
	]);
	return (
		<div
			id="App"
			className="flex h-screen w-screen bg-baseBackground"
		>
			<RouterProvider router={router} />
		</div>
	);
}
