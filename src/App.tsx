import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Fetch from "./pages/Fetch";
import Input from "./pages/Input";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/input" element={<Input />} />
					<Route path="/result" element={<Result />} />
					<Route path="/fetch" element={<Fetch />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
