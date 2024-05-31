import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaLogin from "./routes/tela_login/TelaLogin.jsx";
import TelaRegistro from "./routes/tela_registro/TelaRegistro.jsx";
import TelaErro from "./routes/tela_erro/TelaErro.jsx";
import TelaPerfil from "./routes/tela_perfil/TelaPerfil.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/registro" element={<TelaRegistro />} />
				<Route path="/perfil" element={<TelaPerfil />} />
				<Route path="*" element={<TelaErro />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
