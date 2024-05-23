import "./Botao_pag.css";
import { useNavigate } from "react-router-dom";

const Botao_pag = ({ titulo, pagina, estilo }) => {
  const navigate = useNavigate();
  const handlePerfil = () => {
    return navigate(pagina);
  };

  return (
    <div className={estilo}>
      <button onClick={handlePerfil}>
        <h1>{titulo}</h1>
      </button>
    </div>
  );
};

export default Botao_pag;
