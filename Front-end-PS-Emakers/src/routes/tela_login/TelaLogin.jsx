import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TelaLogin.css";
import Logo from "../../../public/images/img_logo1.png";
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Barra from "../../components/barra/Barras";
import axios from "axios";

const TelaLogin = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [erroMsg, setErroMsg] = useState("");
	const [sucessoMsg, setSucessoMsg] = useState(false);
	const emailRef = useRef();
	const erroRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErroMsg("");
	}, [email, senha]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSucessoMsg(true);
		// Cria um arq JSON com os dados
		const loginData = {
			email: email,
			password: senha,
		};
		// Converte o arq JSON em uma string JSON
		const jsonData = JSON.stringify(loginData);

		console.log("Dados enviados:", jsonData);

		try {
			const response = await axios.post(
				"https://reqres.in/api/login",
				loginData
			);
			console.log("Dados enviados:", response.data);
			localStorage.setItem("token", response.data.token);
			setSucessoMsg("Login realizado com sucesso!");
			setTimeout(() => {
				// animação de login
				navigate("/perfil");
			}, 1000);
		} catch (error) {
			setErroMsg("Erro ao realizar o cadastro. Tente novamente.");
		}

		setEmail("");
		setSenha("");
	};

	return (
		<>
			{sucessoMsg ? (
				<div className="sucesso-msg">
					<h1 className="mensagem_sucesso">{sucessoMsg}</h1>
					<nav className="pontos">
						<div className="ponto_1"></div>
						<div className="ponto_2"></div>
						<div className="ponto_3"></div>
					</nav>
				</div>
			) : (
				<div className="tela_login">
					{" "}
					<div className="lado_login">
						<div className="div_logo">
							<img src={Logo} />
						</div>
						<div className="bloco_login">
							<h1 className="titulo_login"> Entre em sua conta </h1>
							<form className="conjunto_inputs1" onSubmit={handleSubmit}>
								<p
									ref={erroRef}
									className={erroMsg ? "erroMsg" : "off"}
									aria-live="assertive">
									{erroMsg}
								</p>
								<div className="e-mail1">
									<span>E-mail</span>
									<Input_email
										value={email}
										email={emailRef}
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
								<Botao_pag titulo="Entrar" estilo="pag_perfil" />
							</form>
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
			)}
		</>
	);
};

export default TelaLogin;
