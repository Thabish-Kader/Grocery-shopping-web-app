/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"Fuzzy Bubbles": ["Fuzzy Bubbles", "cursive"],
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
