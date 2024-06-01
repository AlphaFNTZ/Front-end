import { React, useEffect, useRef, useState } from "react";
import "./TelaRegistro.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidErrorAlt } from "react-icons/bi";
import gif from "../../assets/gif_1.gif";
import Logo from "../../../public/images/img_logo1.png";
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
	const [sucessoMsg, setSucessoMsg] = useState(false);
	const [senhaIgual, setSenhaIgual] = useState(true);
	const [nomeArquivo, setNomeArquivo] = useState("");
	const emailRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setSenhaIgual(senha === confSenha);
	}, [senha, confSenha]);

	const [validacao, setValidacao] = useState({
		caso: false,
		numero: false,
		tamanho: false,
	});

	const senhaModelo = (senha) => {
		const regexMaisculoCaso = RegExp(/^(?=.*[A-Z]).+$/);
		const regexMinusuloCaso = RegExp(/^(?=.*[a-z]).+$/);
		const regexNumero = RegExp(/^(?=.*[0-9]).+$/);
		const tamanho = senha.length >= 6;
		setValidacao({
			caso: regexMaisculoCaso.test(senha) && regexMinusuloCaso.test(senha),
			numero: regexNumero.test(senha),
			tamanho: tamanho,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (senha !== confSenha) {
			setSenhaIgual(false);
			return;
		}
		if (!validacao.caso || !validacao.numero || !validacao.tamanho) {
			setErroMsg("A senha não atende aos requisitos.");
			return;
		}
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
				"https://reqres.in/api/register",
				registroData
			);
			localStorage.setItem("id", response.data.id);
			localStorage.setItem("token", response.data.token);
			console.log("Token e id:", response.data);*/
			setSucessoMsg("Cadastro realizado com sucesso!");
			setTimeout(() => {
				navigate("/");
			}, 2000); // Redireciona após 1 segundos
		} catch (error) {
			if (error.response && error.response.status === 400) {
				setSucessoMsg("Aconteceu algum erro. Por favor, tente novamente.");
				setTimeout(() => {
					// animação de login
					window.location.reload();
				}, 2000);
			} else {
				setSucessoMsg(
					"Erro ao realizar o cadastro. Tente novamente mais tarde."
				);
				setTimeout(() => {
					// animação de login
					window.location.reload();
				}, 2000);
			}
		}
		setNome("");
		setEmail("");
		setSenha("");
		setSexo("");
		setFoto("");
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFoto(file); // Atualiza a variável de estado com o arquivo selecionado
		setNomeArquivo(file.name); // Atualiza a variável de estado com o nome do arquivo
	};

	const handleSenhaChange = (e) => {
		const senha = e.target.value;
		setSenha(senha);
		senhaModelo(senha);
	};

	return (
		<>
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
								<div className="verificacao_senha">
									<div
										className={`caracteres${
											validacao.tamanho ? "_visivel" : ""
										}`}>
										<BiSolidErrorAlt />
										<span>6 caracteres</span>
									</div>
									<div
										className={`numeros${validacao.numero ? "_visivel" : ""}`}>
										<BiSolidErrorAlt />
										<span>Números</span>
									</div>
									<div
										className={`maiscuscula_e_minuscula${
											validacao.caso ? "_visivel" : ""
										}`}>
										<BiSolidErrorAlt />
										<span>Maiscúscula e minúscula</span>
									</div>
								</div>
								<Input_senha
									id="senha"
									value={senha}
									onChange={handleSenhaChange}
								/>
							</div>
							<div className="conf_senha">
								<span>Confimar senha</span>
								<div
									className={`erro_${senhaIgual ? "nao_visivel" : ""}`}
									senhaIgual={senhaIgual}>
									<BiSolidErrorAlt />
									<span>Confirmação de senha não confere.</span>
								</div>
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
									{nomeArquivo && (
										<p className="nome_arquivo">
											Arquivo selecionado: {nomeArquivo}
										</p>
									)}
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
