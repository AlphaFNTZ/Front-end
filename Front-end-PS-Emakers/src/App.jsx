import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="principal">
			<Outlet />
		</div>
	);
}

export default App;
