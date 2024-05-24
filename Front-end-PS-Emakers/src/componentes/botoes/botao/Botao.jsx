import "./Botao.css";
import {
  SlMagnifier,
  SlPeople,
  SlPencil,
  SlMenu,
  SlArrowUp,
} from "react-icons/sl";

const Botao = ({ tipo }) => {
  return (
    <div className={tipo}>
      <button className="botao_pessoas">
        <SlPeople />
      </button>
      <button className="botao_lupa">
        <SlMagnifier />
      </button>
      <button className="botao_edit">
        <SlPencil />
      </button>
      <button className="botao_mais">
        <SlMenu />
      </button>
      <button className="botao_voltar">
        <SlArrowUp />
      </button>
    </div>
  );
};

export default Botao;
