/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				baseBackground: "#E8E8FD",
				baseCardBackground: "#FFFFFF",
				sidebarBackground: "#F8F8FF",
				primaryColor: "#EE4D38",
				secondaryTextColor: "#62618F",
				primaryTextColor: "#000000",
				whiteTextColor: "FFFFFF",
			},
		},
	},
	plugins: [],
};
