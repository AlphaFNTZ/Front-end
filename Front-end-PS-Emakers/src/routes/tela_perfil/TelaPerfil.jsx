import "./TelaPerfil.css";
import { React, useState } from "react";
/* Fotos */
import Foto_perfil from "../../../public/images/img_perfil.png";
import Logo1 from "../../../public/images/img_logo2.png";
import Foto1 from "../../../public/images/foto_1.png";
import Foto2 from "../../../public/images/foto_2.png";
import Foto3 from "../../../public/images/foto_3.png";
import Foto4 from "../../../public/images/foto_4.png";
import Foto5 from "../../../public/images/foto_5.png";
import Foto6 from "../../../public/images/foto_6.png";
import Foto7 from "../../../public/images/foto_7.png";
import Foto8 from "../../../public/images/foto_8.png";
import Foto9 from "../../../public/images/foto_9.png";
import Foto10 from "../../../public/images/foto_10.png";
/* Fotos */
/* Componentes */
import Botao from "../../components/botoes/botao/Botao";
import Barra from "../../components/barra/Barras";
import Menu_base from "../../components/menus/menu_base/Menu_base";
import Fundo_foto from "../../components/fundo_foto/Fundo_foto";
/* Componentes */

function TelaPerfil() {
	/* Um "for" para fotos*/
	const fotos = [
		{ foto: Foto1, onClick: () => mudarFotoPerfil(Foto1) },
		{ foto: Foto2, onClick: () => mudarFotoPerfil(Foto2) },
		{ foto: Foto3, onClick: () => mudarFotoPerfil(Foto3) },
		{ foto: Foto4, onClick: () => mudarFotoPerfil(Foto4) },
		{ foto: Foto5, onClick: () => mudarFotoPerfil(Foto5) },
		{ foto: Foto6, onClick: () => mudarFotoPerfil(Foto6) },
		{ foto: Foto7, onClick: () => mudarFotoPerfil(Foto7) },
		{ foto: Foto8, onClick: () => mudarFotoPerfil(Foto8) },
		{ foto: Foto9, onClick: () => mudarFotoPerfil(Foto9) },
		{ foto: Foto10, onClick: () => mudarFotoPerfil(Foto10) },
	];
	/* Um "for" para fotos*/
	/* Variaveis e funções */
	const [telaVisivel, setTelaVisivel] = useState(false);
	const [fotoPerfil, setFotoPerfil] = useState(Foto_perfil);
	const [menuVisivel, setMenuVisivel] = useState(false);
	const [amigosVisivel, setAmigosVisivel] = useState(false);
	const [perfilVisivel, setPerfilVisivel] = useState(false);
	const [pesqVisivel, setPesqVisivel] = useState(false);
	const [editPerfilVisivel, setEditPerfilVisivel] = useState(false);
	const [editCapaVisivel, setEditCapaVisivel] = useState(false);
	const [nome, setNome] = useState("Nome do usuário");
	const [idade, setIdade] = useState("Idade");
	const [bio, setBio] = useState("Conte mais para nós sobre você");

	const toggleMenu = () => {
		setMenuVisivel(!menuVisivel);
	};
	const toggleAmigos = () => {
		setAmigosVisivel(!amigosVisivel);
	};
	const toggleEditUsuario = () => {
		setPerfilVisivel(!perfilVisivel);
	};
	const togglePesq = () => {
		setPesqVisivel(!pesqVisivel);
	};
	const toggleEditPerfil = () => {
		setEditPerfilVisivel(!editPerfilVisivel);
	};
	const toggleEditCapa = () => {
		setEditCapaVisivel(!editCapaVisivel);
	};
	const mudarFotoPerfil = (novaFoto) => {
		setFotoPerfil(novaFoto);
	};
	/* Variaveis e funções */
	return (
		<div className="tela_inteira">
			{/* As telas dos menus */}
			<Menu_base
				tipo="menu"
				funcao={menuVisivel}
				toggle={toggleMenu}
				togglePesq={togglePesq}
				toggleUsuario={toggleEditUsuario}
				toggleAmigos={toggleAmigos}
			/>
			<Menu_base tipo="pesquisar" funcao={pesqVisivel} toggle={togglePesq} />
			<Menu_base tipo="amigos" funcao={amigosVisivel} toggle={toggleAmigos} />
			<Menu_base
				tipo="editUsuario"
				funcao={perfilVisivel}
				toggle={toggleEditUsuario}
				onChange1={(e) => setNome(e.target.value)}
				onChange2={(e) => setIdade(e.target.value)}
				onChange3={(e) => setBio(e.target.value)}
			/>
			<Menu_base
				tipo="editPerfil"
				funcao={editPerfilVisivel}
				toggle={toggleEditPerfil}
				fotos={fotos}
			/>
			<Menu_base
				tipo="editCapa"
				funcao={editCapaVisivel}
				toggle={toggleEditCapa}
			/>
			{/* As telas dos menus */}
			<div className="parte_cima">
				<div className="logo">
					<img src={Logo1} />
				</div>
				<div className="funcoes">
					<div className="lupa" onClick={togglePesq}>
						<Botao tipo="tipo_lupa" />
					</div>
					<div className="pessoas" onClick={toggleAmigos}>
						<Botao tipo="tipo_pessoas" />
					</div>
					<div className="princ" onClick={toggleEditUsuario}>
						<Botao tipo="tipo_perfil" foto={fotoPerfil} />
					</div>
					<div className="mais" onClick={toggleMenu}>
						<Botao tipo="tipo_mais" />
					</div>
				</div>
			</div>
			<Barra local="inverso" />
			<div className="parte_baixo">
				<div className="parte_perfil">
					<div className="perfil">
						<img className="foto_perfil" src={fotoPerfil} alt="" />
						<div className="editar_perfil" onClick={toggleEditPerfil}>
							<Botao tipo="tipo_edit" />
						</div>
					</div>
					<div className="parte_escrita">
						<h1 className="nome_idade">
							{nome} , {idade}
						</h1>
						<h2 className="bio_completa">{bio}</h2>
					</div>
					<div className="editar_capa" onClick={toggleEditCapa}>
						<Botao tipo="tipo_edit" />
					</div>
				</div>
				<div
					className={`parte_fotos ${telaVisivel ? "visivel" : ""}`}
					telaVisivel={telaVisivel}>
					<div className="barra_foto">{/*<Barra local="inverso" />*/}</div>
					<div className="fotos">
						{fotos.map((item, index) => (
							<Fundo_foto key={index} foto={item.foto} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TelaPerfil;
