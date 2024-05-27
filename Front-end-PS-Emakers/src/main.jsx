import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TelaLogin from "./routes/tela_login/TelaLogin.jsx";
import TelaRegistro from "./routes/tela_registro/TelaRegistro.jsx";
import TelaErro from "./routes/tela_erro/TelaErro.jsx";
import TelaPerfil from "./routes/tela_perfil/TelaPerfil.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <TelaErro />,
		children: [
			{
				path: "/",
				element: <TelaLogin />,
			},
			{
				path: "/registro",
				element: <TelaRegistro />,
			},
			{
				path: "/perfil",
				element: <TelaPerfil />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
