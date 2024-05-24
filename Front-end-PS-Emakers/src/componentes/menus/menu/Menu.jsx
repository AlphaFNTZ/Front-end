import "./Menu.css";
import { React, useState } from "react";

const Menu_componente = () => {
  return (
    <div className="conteudo_menu">
      <nav>
        <a href="#" style={{ textDecoration: "none" }} /*onClick={togglePesq}*/>
          <h1>Pesquisar</h1>
        </a>
        <a
          href="#"
          style={{ textDecoration: "none" }} /*onClick={toggleAmigos}*/
        >
          <h1>Amigos</h1>
        </a>
        <a
          href="#"
          style={{ textDecoration: "none" }} /*onClick={togglePerfil}*/
        >
          <h1>Perfil</h1>
        </a>
      </nav>
    </div>
  );
};

export default Menu_componente;
