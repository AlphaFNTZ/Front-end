import "./Input_text.css";
import React from "react";

const Input_text = ({ placeholder, value, onChange }) => {
	return (
		<div className="input_text">
			<input
				type="text"
				placeholder={placeholder}
				id="nome"
				autoComplete="off"
				value={value}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input_text;
