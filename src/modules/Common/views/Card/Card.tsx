import React from "react";
import { CardProps } from "./interfaces";

const Card: React.FC<CardProps> = ({
  children,
  type,
  outlined,
  headerTitle,
  customHeader,
  footer,
  ...rest
}) => {
  return (
    <div
      className={`card card-${type ? type : "default"} ${
        outlined && "card-outline"
      }`}
      {...rest}
    >
      {customHeader ? (
        customHeader
      ) : (
        <div className="card-header">
          <h3 className="card-title">{headerTitle}</h3>
        </div>
      )}

      <div className="card-body">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}

      {/* <div className="card-footer clearfix">
        
      </div> */}
    </div>
  );
};

export default Card;
