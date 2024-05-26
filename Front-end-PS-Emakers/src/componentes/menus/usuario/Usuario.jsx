import "./Usuario.css";
import { React, useState } from "react";

const Usuario = ({ onChange1, onChange2, onChange3 }) => {
	return (
		<div className="conteudo_usuario">
			<input
				className="inputNome"
				type="text"
				placeholder="Nome"
				onChange={onChange1}
			/>
			<input
				className="inputIdade"
				type="text"
				placeholder="Idade"
				onChange={onChange2}
			/>
			<textarea
				className="inputBio"
				type="text"
				placeholder="Bio"
				onChange={onChange3}
			/>
		</div>
	);
};

export default Usuario;
