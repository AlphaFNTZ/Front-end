import React from "react";
import "./TelaErro.css";
import img_erro from "../../../public/images/cachorro_foda.png";
import { Link } from "react-router-dom";

const TelaErro = () => {
	return (
		<div className="tela_erro">
			<img src={img_erro} />
			<h1> Vish... Aparentemente há um erro aqui. </h1>
			<Link className="redirecionamento" to="/">
				Voltar para a página de login
			</Link>
		</div>
	);
};

export default TelaErro;
