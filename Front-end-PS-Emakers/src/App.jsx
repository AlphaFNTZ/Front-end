import "./App.css";
import TelaPerfil from "./telas/tela_perfil/TelaPerfil.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="principal">
      <Outlet />
    </div>
  );
}

export default App;
