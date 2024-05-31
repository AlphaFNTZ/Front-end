import { React, useEffect, useRef, useState } from "react";
import "./TelaRegistro.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input_text from "../../components/inputs/input_text/Input_text";
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Select_sexo from "../../components/selecoes/select_sexo/Select_sexo";
import Select_img from "../../components/selecoes/select_img/Select_img";
import Barra from "../../components/barra/Barras";

const TelaRegistro = () => {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [confSenha, setConfSenha] = useState("");
	const [sexo, setSexo] = useState("");
	const [foto, setFoto] = useState(null);
	const [erroMsg, setErroMsg] = useState("");
	const [sucessoMsg, setSucessoMsg] = useState(false);
	const [senhaIgual, setSenhaIgual] = useState(false);
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
		/*if (senha !== emailConf) {
			setErroMsg("As senhas são iguais");
			console.log("Deu ruim nego");
			return;
		}*/

		e.preventDefault();
		setSucessoMsg(true);
		// Cria o objeto JSON com os dados do formulário
		const registroData = {
			nome: nome,
			email: email,
			senha: senha,
			sexo: sexo,
		};
		// Converte o objeto JSON em uma string JSON
		const jsonData = JSON.stringify(registroData);

		console.log("Dados enviados:", jsonData);

		try {
			/*const response = await axios.post(	
				"Endereço https",
				loginData
			);*/
			setSucessoMsg("Cadastro realizado com sucesso!");
			setTimeout(() => {
				navigate("/");
			}, 1000); // Redireciona após 2 segundos
		} catch (error) {
			setErroMsg("Erro ao realizar o cadastro. Tente novamente.");
		}

		setNome("");
		setEmail("");
		setSenha("");
		setSexo("");
		setFoto("");
	};

	const handleSenhas = () => {
		if (senha != confSenha) {
			setSenhaIgual(true);
			return;
		}
	};

	const handleFileChange = (e) => {
		setFoto(e.target.files[0]); // Atualiza a variável de estado com o arquivo selecionado
		console.log(e.target.files[0]); // Adiciona um console.log para verificar o arquivo
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
				<div className="tela_registro">
					<div className="bloco_registro">
						<h1 className="titulo_registro"> Registrar </h1>
						<form className="conjunto_inputs" onSubmit={handleSubmit}>
							<div className="nome">
								<span>Nome</span>
								<Input_text
									value={nome}
									onChange={(e) => setNome(e.target.value)}
								/>
							</div>
							<div className="e-mail">
								<span>E-mail</span>
								<Input_email
									value={email}
									email={emailRef}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="senha">
								<span>Senha</span>
								<Input_senha
									id="senha"
									value={senha}
									onChange={(e) => setSenha(e.target.value)}
								/>
							</div>
							<div className="conf_senha">
								<span>Confimar senha</span>
								<span
									className={`erro ${senhaIgual ? "visivel" : ""}`}
									senhaIgual={senhaIgual}>
									mensagem de erro
								</span>
								<Input_senha
									id="confSenha"
									value={confSenha}
									onChange={(e) => setConfSenha(e.target.value)}
								/>
							</div>
							<div className="conjunto_perfil">
								<div className="div_sexo">
									<span>Sexo</span>
									<Select_sexo
										value={sexo}
										onChange={(e) => setSexo(e.target.value)}
									/>
								</div>
								<div className="div_imagem">
									<span>Imagem</span>
									<Select_img onChange={handleFileChange} />
								</div>
							</div>
							<Botao_pag titulo="Registre-se" estilo="pag_login" />
						</form>
						<div className="completar_acao">
							<Link to="/" href="#" className="link">
								Já possui conta?
							</Link>
						</div>
					</div>
					<Barra local="normal" />
					<div className="bloco_imagem">
						<div className="componentes_info">
							<div className="img_logo"></div>
							<span>Venha fazer parte da maior rede social também!</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TelaRegistro;
