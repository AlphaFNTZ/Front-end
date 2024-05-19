import React, { useState } from "react";
import "./TelaLogin.css";
import Logo from "../../../public/imagens/img_logo1.png";
import { Link } from "react-router-dom";
import { SlEye } from "react-icons/sl";

const TelaLogin = () => {
  return (
    <div className="tela_login">
      <div className="div_logo">
        <img src={Logo} alt="" />
      </div>
      <div className="bloco_login">
        <span className="titulo_login"> Entre em sua conta </span>
        <div className="conjunto_inputs1">
          <div className="e-mail1">
            <span>E-mail</span>
            <input type="email" />
          </div>
          <div className="senha1">
            <span>Senha</span>
            <input type="password" />
          </div>
        </div>
        <Link to="/perfil" className="completar_acao1">
          <span>Entrar</span>
        </Link>
      </div>
      <div className="barra1"></div>
      <div className="bloco_foto">
        <div className="conteudo">
          <span className="titulo"> Novo aqui? </span>
          <span className="texto">
            {" "}
            Registra-se e venha fazer parte da maior rede social!{" "}
          </span>
          <Link to="/registro" className="botao_registro">
            <span>Registre-se</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;
