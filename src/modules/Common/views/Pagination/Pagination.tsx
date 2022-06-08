import React from "react";
import { PaginationProps } from "./interface";

const Pagination: React.FC<PaginationProps> = ({ size, ...rest }) => {
  return (
    <ul className={`pagination pagination-${size} ${rest.className}`}>
      <li className="page-item">
        <a className="page-link" href="#">
          «
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          »
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
