import React from "react";
import { InputProps } from "./interfaces";
import TextArea from "./TextArea";

const Input: React.FC<InputProps> = ({ label, placeholder, size, ...rest }) => {
  let inputSize = "";

  if (size === "lg") {
    inputSize = "form-control-lg";
  } else if (size === "sm") {
    inputSize = "form-control-sm";
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={`form-control ${rest.className} ${inputSize}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
