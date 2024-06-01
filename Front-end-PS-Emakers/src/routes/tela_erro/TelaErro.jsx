// Import do CSS da tela e as fuções
import "./TelaErro.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import das fotos
import img_erro from "../../../public/images/img_tela_erro.png";
import Logo from "../../../public/images/img_logo1.png";

const TelaErro = () => {
	// Criação da variavel para controla a visibilidade do balao de mensagem
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		// Tela de erro
		<div className="tela_erro">
			<div className="div_logo_erro">
				<img src={Logo} />
			</div>
			<div
				className="img_erro_container"
				// Funçao para mudar a variavel "showTooltip" para true quando o mouse estiver em cima da img
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}>
				<img src={img_erro} alt="Erro" />
				{showTooltip && (
					<div className="tooltip">Talvez o erro esteja no HTML</div>
				)}
			</div>
			<h1> Vish... Aparentemente há um erro aqui. </h1>
			<Link className="redirecionamento" to="/">
				Voltar para a página de login
			</Link>
		</div>
	);
};

export default TelaErro;
