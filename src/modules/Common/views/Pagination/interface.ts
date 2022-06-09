type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

export interface PropsExtra {
  size?: "lg" | "sm" | undefined;
  pages: number;
  //   children: React.ReactNode;
  //   type?: "default" | "primary" | "success" | "danger" | "warning" | "info";
  //   outlined?: boolean;
  //   headerTitle: string | React.ReactNode;
  //   customHeader?: string | React.ReactNode;
  //   footer?: string | React.ReactNode;
}

// Define Props
export interface PaginationProps
  extends SimpleSpread<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
    PropsExtra
  > {}
