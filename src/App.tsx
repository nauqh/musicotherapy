import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import Input from "./pages/Input";
import Diagnose from "./pages/Diagnose";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/input" element={<Input />} />
					<Route path="/fetch" element={<Fetch />} />
					<Route path="/test" element={<Diagnose />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
