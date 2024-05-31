import "./Input_email.css";

const Input_email = ({ placeholder, onChange, value, email }) => {
	return (
		<div className="input_email">
			<input
				type="email"
				id="usuário"
				autoComplete="off"
				placeholder={placeholder}
				value={value}
				ref={email}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input_email;
