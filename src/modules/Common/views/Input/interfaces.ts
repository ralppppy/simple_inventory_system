type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface InputPropsExtra {
  label?: string | React.ReactNode;
  placeholder?: string;
  size?: "lg" | "sm" | undefined;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | undefined;
}

// Define Props
export interface InputProps
  extends SimpleSpread<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    InputPropsExtra
  > {}

export interface TextAreaPropsExtra {
  label?: string | React.ReactNode;
  placeholder?: string;
  size?: "lg" | "sm" | undefined;
}

// Define Props
export interface TextAreaProps
  extends SimpleSpread<
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    TextAreaPropsExtra
  > {}
