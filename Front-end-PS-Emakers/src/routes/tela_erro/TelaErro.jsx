import React from "react";
import "./TelaErro.css";
import img_erro from "../../../public/images/img_error.png";

const TelaErro = () => {
	return (
		<div className="tela_erro">
			<img src={img_erro} alt="" />
			<h1> Vish... Aparentemente há um erro aqui. </h1>
		</div>
	);
};

export default TelaErro;
