import "./Select_sexo.css";

const Select_sexo = ({ value, onChange }) => {
	return (
		<select type="text" value={value} onChange={onChange}>
			<option value="0">Selecione</option>
			<option value="Masculino">Masculino</option>
			<option value="Feminino">Feminino</option>
			<option value="Outros">Outros</option>
		</select>
	);
};

export default Select_sexo;
