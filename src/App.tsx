import { useState } from "react";
import { Banner } from "./components/Banner";
import { CategoryCards } from "./components/CategoryCards";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
