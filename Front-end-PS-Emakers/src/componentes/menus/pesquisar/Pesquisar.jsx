import "./Pesquisar.css";
import { React, useState } from "react";

const Pesquisar = () => {
	return (
		<div className="conteudo_pesquisar">
			<input type="text" placeholder="Digite o nome" />
			<div className="listaDePesquisar">
				<h1> Nenhum resultado encontrado </h1>
			</div>
		</div>
	);
};

export default Pesquisar;
