// Import do CSS da tela e as fuções
import "./TelaLogin.css";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import das fotos
import gif from "../../assets/gif_1.gif";
import Logo from "../../../public/images/img_logo1.png";

// Import dos componentes
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Barra from "../../components/barra/Barras";

const TelaLogin = () => {
	// Criando variaveis
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [sucessoMsg, setSucessoMsg] = useState(false);
	const emailRef = useRef();
	const navigate = useNavigate();

	// Rodar apenas uma vez após a montagem
	useEffect(() => {
		emailRef.current.focus();
	}, []);

	// Função para criar os dados em formato JSON a serem enviados para o back
	const handleSubmit = async (e) => {
		// Desativa o comportamento padrão (reload da pagina)
		e.preventDefault();

		// Define o sucessoMsg como "true"
		setSucessoMsg(true);

		// Cria um arq JSON já com os seus respectivos campos com os dados
		const loginData = {
			email: email,
			senha: senha,
		};

		// Converte o arq JSON em uma string JSON
		const jsonData = JSON.stringify(loginData);

		console.log("Dados enviados:", jsonData);

		// Executa o envio para o back e captura, caso tenha, o erro retornado (catch)
		try {
			// Executa uma requisição do tipo "post" ao back com os dados "loginData" como entrada
			const response = await axios.post(
				"http://localhost:8080/pessoa/login",
				/*"https://reqres.in/api/login",*/
				loginData
			);

			console.log("Token:", response.data);

			// Armazena em um "local storage" o token retornado do back
			localStorage.setItem("token", response.data.token);

			// Define uma mensagem de sucesso
			setSucessoMsg("Login realizado com sucesso!");

			// Define um tempo para a animação de loading
			setTimeout(() => {
				// Redireciona para a pagina perfil
				navigate("/perfil");
			}, 1500);
		} catch (error) {
			if (error.response && error.response.status === 400) {
				// Caso o erro seja do tipo "400" (Bad Request)
				// Define uma mensagem de erro
				setSucessoMsg("Dados inválidos. Por favor, tente novamente.");
				setTimeout(() => {
					// Dá um reload na pagina de login
					window.location.reload();
				}, 2000);
			} else {
				// Caso o catch capture outro erro
				// Define uma mensagem de erro
				setSucessoMsg("Erro ao realizar o login. Tente novamente mais tarde.");
				setTimeout(() => {
					// Dá um reload na pagina de login
					window.location.reload();
				}, 2000);
			}
		}
		// Limpa as variaveis de email e senha
		setEmail("");
		setSenha("");
	};

	return (
		<>
			{/* Função para separar a tela de login e a sua tela de carregamento */}
			{/* Então quando a variavel de "sucessoMsg" muda para "true" ele entra na tela de carregamento*/}
			{/* Então quando a variavel de "sucessoMsg" muda para "false" ele entra na tela de login*/}
			{sucessoMsg ? (
				<div className="sucesso-msg">
					<div className="div_logo_sucesso">
						<img src={Logo} />
					</div>
					<h1 className="mensagem_sucesso">{sucessoMsg}</h1>
					<div className="gif">
						<img src={gif} />
					</div>
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
