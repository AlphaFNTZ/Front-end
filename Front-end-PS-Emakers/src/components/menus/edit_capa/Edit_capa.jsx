import "./Edit_capa.css";
import { React, useState } from "react";

const Edit_capa = ({ fotos_capa }) => {
	return (
		<div className="conteudo_edit_capa">
			{fotos_capa.map((item, index) => (
				<img key={index} src={item.foto} onClick={item.onClick} />
			))}
		</div>
	);
};

export default Edit_capa;
