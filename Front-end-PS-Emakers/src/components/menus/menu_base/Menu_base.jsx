import "./Menu_base.css";
import Menu_componente from "../menu_componente/Menu_componente";
import Pesquisar from "../pesquisar/Pesquisar";
import Amigos from "../amigos/Amigos";
import Usuario from "../usuario/Usuario";
import Edit_perfil from "../edit_perfil/Edit_perfil";
import Edit_capa from "../edit_capa/Edit_capa";
import Botao from "../../botoes/botao/Botao";
import { React } from "react";

const Menu_base = ({
	toggle,
	tipo,
	funcao,
	fotos,
	onChange1,
	onChange2,
	onChange3,
	togglePesq,
	toggleUsuario,
	toggleAmigos,
}) => {
	return (
		<div>
			{tipo === "menu" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Menu_componente
						togglePesq={togglePesq}
						toggleUsuario={toggleUsuario}
						toggleAmigos={toggleAmigos}
					/>
				</div>
			)}

			{tipo === "pesquisar" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Pesquisar />
				</div>
			)}

			{tipo === "amigos" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Amigos />
				</div>
			)}
			{tipo === "editUsuario" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Usuario
						onChange1={onChange1}
						onChange2={onChange2}
						onChange3={onChange3}
					/>
				</div>
			)}
			{tipo === "editPerfil" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Edit_perfil fotos={fotos} />
				</div>
			)}
			{tipo === "editCapa" && (
				<div className={`${tipo} ${funcao ? "visivel" : ""}`} funcao={funcao}>
					<div className="voltar" onClick={toggle}>
						<Botao tipo="tipo_voltar" />
					</div>
					<Edit_capa />
				</div>
			)}
		</div>
	);
};

export default Menu_base;
