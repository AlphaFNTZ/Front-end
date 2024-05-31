import "./Input_senha.css";
import React, { useState } from "react";
import { SlEye } from "react-icons/sl";

const Input_senha = ({ id, onChange, value }) => {
	const [senha, setSenha] = useState("password");

	const toggleSenha = () => {
		setSenha(senha === "password" ? "text" : "password");
	};

	return (
		<div className="input_senha">
			<input id={id} type={senha} value={value} onChange={onChange} required />
			<SlEye size={25} onClick={toggleSenha} />
		</div>
	);
};

export default Input_senha;
