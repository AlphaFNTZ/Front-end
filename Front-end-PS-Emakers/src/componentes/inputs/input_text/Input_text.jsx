import "./Input_text.css";
import React from "react";

const Input_text = ({ placeholder }) => {
  return (
    <div className="input_text">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input_text;
