import "./Input_email.css";

const Input_email = ({ placeholder }) => {
  return (
    <div className="input_email">
      <input type="email" placeholder={placeholder} />
    </div>
  );
};

export default Input_email;
