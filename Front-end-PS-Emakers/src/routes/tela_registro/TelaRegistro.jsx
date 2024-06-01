// Import do CSS da tela e as fuções
import "./TelaRegistro.css";
import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import do icon
import { BiSolidErrorAlt } from "react-icons/bi";

// Import das fotos
import gif from "../../assets/gif_1.gif";
import Logo from "../../../public/images/img_logo1.png";

// Import dos componentes
import Input_text from "../../components/inputs/input_text/Input_text";
import Input_email from "../../components/inputs/input_email/Input_email";
import Input_senha from "../../components/inputs/input_senha/Input_senha";
import Botao_pag from "../../components/botoes/botao_pag/Botao_pag";
import Select_sexo from "../../components/selecoes/select_sexo/Select_sexo";
import Select_img from "../../components/selecoes/select_img/Select_img";
import Barra from "../../components/barra/Barras";

const TelaRegistro = () => {
	// Criando variaveis
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

	// Rodar apenas uma vez após a montagem
	useEffect(() => {
		emailRef.current.focus();
	}, []);

	// Atualiza o estado da variavel "senhaIgual" para true quando a senha for igual
	useEffect(() => {
		setSenhaIgual(senha === confSenha);
	}, [senha, confSenha]);

	// Criando a variavel de validação para o tratamento da senha
	const [validacao, setValidacao] = useState({
		caso: false,
		numero: false,
		tamanho: false,
	});

	// Criando as condições da senha com o regex
	const senhaModelo = (senha) => {
		const regexMaisculoCaso = RegExp(/^(?=.*[A-Z]).+$/); // É necessario tem letra maiuscula
		const regexMinusuloCaso = RegExp(/^(?=.*[a-z]).+$/); // É necessario tem letra minuscula
		const regexNumero = RegExp(/^(?=.*[0-9]).+$/); // É necessario que tenha pelo menos 1 numero
		const tamanho = senha.length >= 6; // É necessario ter no minimo 6 caracteres

		// Puxa o conteudo do input senha e passa atraves da triagem com as condições
		setValidacao({
			caso: regexMaisculoCaso.test(senha) && regexMinusuloCaso.test(senha),
			numero: regexNumero.test(senha),
			tamanho: tamanho,
		});
	};

	const handleSubmit = async (e) => {
		// Desativa o comportamento padrão (reload da pagina)
		e.preventDefault();

		// Função para não deixar o usuario registrar caso a "senha" e "confSenha" não esteja iguais
		if (senha !== confSenha) {
			setSenhaIgual(false);
			return;
		}

		// Função para não deixar o usuario registrar caso a "senha" não tenha comprido a triagem
		if (!validacao.caso || !validacao.numero || !validacao.tamanho) {
			setErroMsg("A senha não atende aos requisitos.");
			return;
		}

		// Define o sucessoMsg como "true"
		setSucessoMsg(true);

		// Cria um arq JSON já com os seus respectivos campos com os dados
		const registroData = {
			nome: nome,
			email: email,
			senha: senha,
			sexo: sexo,
		};

		// Converte o objeto JSON em uma string JSON
		const jsonData = JSON.stringify(registroData);

		console.log("Dados enviados:", jsonData);

		// Executa o envio para o back e captura, caso tenha, o erro retornado (catch)
		try {
			// Executa uma requisição do tipo "post" ao back com os dados "registroData" como entrada
			/*const response = await axios.post(
				"https://reqres.in/api/register",
				registroData
			);
			localStorage.setItem("id", response.data.id);
			localStorage.setItem("token", response.data.token);
			console.log("Token e id:", response.data);*/

			// Define uma mensagem de sucesso
			setSucessoMsg("Cadastro realizado com sucesso!");

			// Define um tempo para a animação de loading
			setTimeout(() => {
				// Redireciona para a pagina login
				navigate("/");
			}, 2000);
		} catch (error) {
			if (error.response && error.response.status === 400) {
				// Caso o erro seja do tipo "400" (Bad Request)
				// Define uma mensagem de erro
				setSucessoMsg("Aconteceu algum erro. Por favor, tente novamente.");
				setTimeout(() => {
					// Dá um reload na pagina de registro
					window.location.reload();
				}, 2000);
			} else {
				// Caso o catch capture outro erro
				// Define uma mensagem de erro
				setSucessoMsg(
					"Erro ao realizar o cadastro. Tente novamente mais tarde."
				);
				setTimeout(() => {
					// Dá um reload na pagina de registro
					window.location.reload();
				}, 2000);
			}
		}

		// Limpa as variaveis de nome, email, senha, sexo e foto
		setNome("");
		setEmail("");
		setSenha("");
		setSexo("");
		setFoto("");
	};

	// Função de envio do arquivo de entrada do input de imagem
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFoto(file); // Atualiza a variável de estado com o arquivo selecionado
		setNomeArquivo(file.name); // Atualiza a variável de estado com o nome do arquivo
	};

	// Função para poder utilizar dois "onChange" em um unico componente
	const handleSenhaChange = (e) => {
		const senha = e.target.value; // Pega o valor que esta sendo digitado
		setSenha(senha); // Puxa o valor e coloca na variavel "senha"
		senhaModelo(senha); // Puxa o valor e coloca na variavel "senhaModelo"
	};

	return (
		<>
			{/* Função para separar a tela de registro e a sua tela de carregamento */}
			{/* Então quando a variavel de "sucessoMsg" muda para "true" ele entra na tela de carregamento*/}
			{/* Então quando a variavel de "sucessoMsg" muda para "false" ele entra na tela de registro*/}
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
