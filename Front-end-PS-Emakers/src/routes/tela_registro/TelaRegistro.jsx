import React, { useState } from "react";
import "./TelaRegistro.css";
import { Link } from "react-router-dom";
import Input_text from "../../components/inputs/input_text/Input_text";
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Select_sexo from "../../components/selecoes/select_sexo/Select_sexo";
import Select_img from "../../components/selecoes/select_img/Select_img";
import Barra from "../../components/barra/Barras";

const TelaRegistro = () => {
	return (
		<div className="tela_registro">
			<div className="bloco_registro">
				<h1 className="titulo_registro"> Registrar </h1>
				<div className="conjunto_inputs">
					<div className="nome">
						<span>Nome</span>
						<Input_text />
					</div>
					<div className="e-mail">
						<span>E-mail</span>
						<Input_email />
					</div>
					<div className="senha">
						<span>Senha</span>
						<Input_senha />
					</div>
					<div className="conf_senha">
						<span>Confimar senha</span>
						<Input_senha />
					</div>
					<div className="conjunto_perfil">
						<div className="div_sexo">
							<span>Sexo</span>
							<Select_sexo />
						</div>
						<div className="div_imagem">
							<span>Imagem</span>
							<Select_img />
						</div>
					</div>
				</div>
				<div className="completar_acao">
					<Botao_pag titulo="Registre-se" pagina="/perfil" estilo="pag_login" />
					<Link to="/" href="#" className="link">
						Já possui conta?
					</Link>
				</div>
			</div>
			<Barra local="normal" />
			<div className="bloco_imagem">
				<div className="componentes_info">
					<div className="img_logo"></div>
					<span>Venha fazer parte da maior rede social também!</span>
				</div>
			</div>
		</div>
	);
};

export default TelaRegistro;
