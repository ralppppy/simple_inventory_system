type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface PropsExtra {
  children: React.ReactNode;
  type?: "default" | "primary" | "success" | "danger" | "warning" | "info";
  outlined?: boolean;
  headerTitle: string | React.ReactNode;
  customHeader?: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

// Define Props
export interface CardProps
  extends SimpleSpread<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    PropsExtra
  > {}
