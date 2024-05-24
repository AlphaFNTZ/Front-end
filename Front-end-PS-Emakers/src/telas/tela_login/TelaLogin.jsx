import React from "react";
import "./TelaLogin.css";
import Logo from "../../../public/imagens/img_logo1.png";
import Input_email from "../../componentes/inputs/input_email/Input_email";
import Input_senha from "../../componentes/inputs/input_senha/Input_senha";
import Botao_pag from "../../componentes/botoes/botao_pag/Botao_pag";
import Barra from "../../componentes/barra/Barras";

const TelaLogin = () => {
  return (
    <div className="tela_login">
      <div className="lado_login">
        <div className="div_logo">
          <img src={Logo} />
        </div>
        <div className="bloco_login">
          <h1 className="titulo_login"> Entre em sua conta </h1>
          <div className="conjunto_inputs1">
            <div className="e-mail1">
              <span>E-mail</span>
              <Input_email />
            </div>
            <div className="senha1">
              <span>Senha</span>
              <Input_senha />
            </div>
          </div>
          <Botao_pag titulo="Entrar" pagina="/perfil" estilo="pag_perfil" />
        </div>
      </div>
      <Barra local="normal" />
      <div className="lado_foto">
        <div className="conteudo">
          <span className="titulo"> Novo aqui? </span>
          <span className="texto">
            {" "}
            Registra-se e venha fazer parte da maior rede social!{" "}
          </span>
          <Botao_pag
            titulo="Registre-se"
            pagina="/registro"
            estilo="pag_registro"
          />
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;
