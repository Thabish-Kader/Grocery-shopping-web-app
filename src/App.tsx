import { useState } from "react";
import { Banner } from "./components/Banner";
import { CategoryCards } from "./components/CategoryCards";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Banner />
			<CategoryCards />
			<Services />
		</>
	);
}

export default App;