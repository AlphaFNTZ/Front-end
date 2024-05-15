import "./App.css";
import TelaRegistro from './telas/tela_registro/TelaRegistro';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='principal'>
      <div className='registro'>
        <Outlet/>
      </div>
    </div>
  )
}  

export default App
