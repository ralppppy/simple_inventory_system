import React from "react";
type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

interface PropsExtra {
  size?: "lg" | "sm" | "xs" | "flat" | undefined;
  type?:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link"
    | undefined;
  disabled?: boolean | undefined;
}

// Define Props
export interface ButtonProps
  extends SimpleSpread<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsExtra
  > {}
