import { React, useState } from "react";
import Logo1 from "../../../public/imagens/img_logo2.png";
import Foto1 from "../../../public/imagens/foto_1.png";
import Foto2 from "../../../public/imagens/foto_2.png";
import Foto3 from "../../../public/imagens/foto_3.png";
import {
  SlMagnifier,
  SlPeople,
  SlPencil,
  SlMenu,
  SlArrowUp,
} from "react-icons/sl";
import "./TelaPerfil.css";

function TelaPerfil() {
  const [telaVisivel, setTelaVisivel] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(Foto1);
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [amigosVisivel, setAmigosVisivel] = useState(false);
  const [perfilVisivel, setPerfilVisivel] = useState(false);
  const [pesqVisivel, setPesqVisivel] = useState(false);
  const [editPerfilVisivel, setEditPerfilVisivel] = useState(false);
  const [editCapaVisivel, setEditCapaVisivel] = useState(false);
  const [nome, setNome] = useState("Nome do usuario");
  const [idade, setIdade] = useState("Idade");
  const [bio, setBio] = useState("Conte mais para nós sobre você");

  const toggleMenu = () => {
    setMenuVisivel(!menuVisivel);
    setTelaVisivel(!telaVisivel);
  };
  const toggleAmigos = () => {
    setAmigosVisivel(!amigosVisivel);
  };
  const togglePerfil = () => {
    setPerfilVisivel(!perfilVisivel);
  };
  const togglePesq = () => {
    setPesqVisivel(!pesqVisivel);
  };
  const toggleEditPerfil = () => {
    setEditPerfilVisivel(!editPerfilVisivel);
    setTelaVisivel(!telaVisivel);
  };
  const toggleEditCapa = () => {
    setEditCapaVisivel(!editCapaVisivel);
  };
  const mudarFotoPerfil = (novaFoto) => {
    setFotoPerfil(novaFoto);
  };

  return (
    <div className="tela_inteira">
      <div
        className={`menu ${menuVisivel ? "visivel" : ""}`}
        menuVisivel={menuVisivel}
      >
        <SlArrowUp size={25} onClick={toggleMenu} />
        <nav>
          <a href="#" style={{ textDecoration: "none" }} onClick={togglePesq}>
            <h1>Pesquisar</h1>
          </a>
          <a href="#" style={{ textDecoration: "none" }} onClick={toggleAmigos}>
            <h1>Amigos</h1>
          </a>
          <a href="#" style={{ textDecoration: "none" }} onClick={togglePerfil}>
            <h1>Perfil</h1>
          </a>
        </nav>
      </div>

      <div
        className={`pesq ${pesqVisivel ? "visivel" : ""}`}
        pesqVisivel={pesqVisivel}
      >
        <SlArrowUp size={25} onClick={togglePesq} />
        <div>
          <input type="text" placeholder="Digite o nome" />
          <div className="listaDePesq">
            <h1> Nenhum resultado encontrado </h1>
          </div>
        </div>
      </div>

      <div
        className={`amigos ${amigosVisivel ? "visivel" : ""}`}
        amigosVisivel={amigosVisivel}
      >
        <SlArrowUp size={25} onClick={toggleAmigos} />
        <div>
          <h1>Você não tem amigos adicionados nessa conta</h1>
        </div>
      </div>

      <div
        className={`perfilEdit ${perfilVisivel ? "visivel" : ""}`}
        perfilVisivel={perfilVisivel}
      >
        <SlArrowUp size={25} onClick={togglePerfil} />
        <div>
          <input
            className="inputNome"
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="inputIdade"
            type="text"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
          />
          <textarea
            className="inputBio"
            type="text"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`editPerfil ${editPerfilVisivel ? "visivel" : ""}`}
        editPerfilVisivel={editPerfilVisivel}
      >
        <SlArrowUp size={25} onClick={toggleEditPerfil} />
        <div className="fotos_perfil">
          <img src={Foto1} onClick={() => mudarFotoPerfil(Foto1)} />
          <img src={Foto2} onClick={() => mudarFotoPerfil(Foto2)} />
          <img src={Foto3} onClick={() => mudarFotoPerfil(Foto3)} />
        </div>
      </div>

      <div
        className={`editCapa ${editCapaVisivel ? "visivel" : ""}`}
        editCapaVisivel={editCapaVisivel}
      >
        <SlArrowUp size={25} onClick={toggleEditCapa} />
        <div>
          <h1>Não há foto disponivel para mudança</h1>
        </div>
      </div>

      <div className="parte_cima">
        <div className="logo">
          <img src={Logo1} alt="" />
        </div>
        <div className="funcoes">
          <div className="lupa" onClick={togglePesq}>
            <SlMagnifier />
          </div>
          <div className="pessoas" onClick={toggleAmigos}>
            <SlPeople />
          </div>
          <div className="princ">
            <img className="foto" src={fotoPerfil} onClick={togglePerfil} />
          </div>
          <div className="mais" onClick={toggleMenu}>
            <SlMenu />
          </div>
        </div>
      </div>
      <div className="barra_1"></div>
      <div className="parte_baixo">
        <div className="parte_perfil">
          <div className="perfil">
            <img className="foto_perfil" src={fotoPerfil} alt="" />
            <div className="editar_perfil" onClick={toggleEditPerfil}>
              <SlPencil />
            </div>
          </div>
          <div className="parte_escrita">
            <h1 className="nome_idade">
              {nome} , {idade}
            </h1>
            <h2 className="bio_completa">{bio}</h2>
          </div>
          <div className="editar_capa" onClick={toggleEditCapa}>
            <SlPencil />
          </div>
        </div>
        <div
          className={`parte_fotos ${telaVisivel ? "visivel" : ""}`}
          telaVisivel={telaVisivel}
        >
          <div className="barra_2"></div>
          <div className="fotos">
            <img src={Foto1} alt="" />
            <img src={Foto2} alt="" />
            <img src={Foto3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaPerfil;
