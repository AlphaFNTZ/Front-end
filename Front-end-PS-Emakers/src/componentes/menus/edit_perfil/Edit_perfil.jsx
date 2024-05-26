import "./Edit_perfil.css";
import { React, useState } from "react";

const Edit_perfil = ({ fotos }) => {
	return (
		<div className="fotos_perfil">
			{fotos.map((item, index) => (
				<img key={index} src={item.foto} onClick={item.onClick} />
			))}
		</div>
	);
};

export default Edit_perfil;
