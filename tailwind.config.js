/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				myOrange: "#fd7014",
				myBlack: "#1f242d",
				myWhite: "#eeeeee",
				myGray: "#323946",
			},
			keyframes: {
				expandUp: {
					"0%": { height: "0%", opacity: "0" },
					"100%": { height: "100%", opacity: "1" },
				},
			},
			animation: {
				"expand-up": "expandUp 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
