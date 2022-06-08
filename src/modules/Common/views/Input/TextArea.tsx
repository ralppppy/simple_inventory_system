import React from "react";
import { TextAreaProps } from "./interfaces";

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  value,

  ...rest
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea className="form-control" placeholder={placeholder} {...rest}>
        {value}
      </textarea>
    </div>
  );
};

export default TextArea;
