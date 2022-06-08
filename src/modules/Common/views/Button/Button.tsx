import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  size,
  type = "default",
  disabled,
  children,
  className,
  ...rest
}) => {
  const btnType = type ? `btn-${type}` : "";
  const btnSize = size ? `btn-${size}` : "";
  const btnDisabled = disabled ? "disabled" : "";

  return (
    <button
      type="button"
      className={`btn btn-block ${btnType} ${btnSize} ${btnDisabled} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
