import { React, useState } from "react";
import "./TelaLogin.css";
import Logo from "../../../public/images/img_logo1.png";
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Barra from "../../components/barra/Barras";

const TelaLogin = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Cria o objeto JSON com os dados do formulário
		const loginData = {
			email: email,
			senha: senha,
		};
		// Converte o objeto JSON em uma string JSON
		const jsonData = JSON.stringify(loginData);

		console.log("Dados enviados:", jsonData);
	};

	return (
		<div className="tela_login">
			<div className="lado_login">
				<div className="div_logo">
					<img src={Logo} />
				</div>
				<div className="bloco_login">
					<h1 className="titulo_login"> Entre em sua conta </h1>
					<div className="conjunto_inputs1">
						<div className="e-mail1">
							<span>E-mail</span>
							<Input_email
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="senha1">
							<span>Senha</span>
							<Input_senha
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
						</div>
					</div>
					<Botao_pag
						titulo="Entrar"
						pagina="/perfil"
						estilo="pag_perfil"
						autenticacao={handleSubmit}
					/>
				</div>
			</div>
			<Barra local="normal" />
			<div className="lado_foto">
				<div className="conteudo">
					<span className="titulo"> Novo aqui? </span>
					<span className="texto">
						{" "}
						Registra-se e venha fazer parte da maior rede social!{" "}
					</span>
					<Botao_pag
						titulo="Registre-se"
						pagina="/registro"
						estilo="pag_registro"
					/>
				</div>
			</div>
		</div>
	);
};

export default TelaLogin;
