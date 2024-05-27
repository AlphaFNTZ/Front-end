import "./Input_email.css";

const Input_email = ({ placeholder, onChange, value }) => {
	return (
		<div className="input_email">
			<input
				type="email"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input_email;
