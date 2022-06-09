import React, { useState } from "react";
import { PaginationProps } from "./interface";
import "./styles.css";

const Pagination: React.FC<PaginationProps> = ({ size, pages, ...rest }) => {
  const DEFAULT_SHOW = 5;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showNextPages, setShowNextPages] = useState<number>(1);

  const handleShowPage = (type: string) => {
    setShowNextPages((prev) => (type === "forward" ? prev + 5 : prev - 5));
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const loadFivePages = (showNextPages: number, currentPage: number) => {
    return new Array(DEFAULT_SHOW).fill(1).map((_, pageNumber) => {
      let actualCurrentPage = pageNumber + showNextPages;

      return (
        <li
          className={`page-item ${
            currentPage === actualCurrentPage && "active"
          }`}
        >
          <a
            onClick={() => handleChangePage(actualCurrentPage)}
            className="page-link"
            href="#"
          >
            {actualCurrentPage}
          </a>
        </li>
      );
    });
  };

  return (
    <ul className={`pagination pagination-${size} ${rest.className}`}>
      {currentPage}
      <li className="page-item">
        <a className="page-link" href="#">
          «
        </a>
      </li>

      {showNextPages > 1 || currentPage > DEFAULT_SHOW ? (
        <>
          <li
            className={`page-item ${
              currentPage === pages - (pages - 1) && "active"
            }`}
          >
            <a
              onClick={() => handleChangePage(pages - (pages - 1))}
              className="page-link"
              href="#"
            >
              {pages - (pages - 1)}
            </a>
          </li>
          <li className="page-item ">
            <a
              onClick={() => handleShowPage("back")}
              data-toggle="tooltip"
              data-placement="top"
              title="Load previous 5 pages"
              className="page-link carret "
              href="#"
            >
              ...
            </a>
          </li>
          {loadFivePages(showNextPages, currentPage)}
          <li className="page-item ">
            <a
              onClick={() => handleShowPage("forward")}
              data-toggle="tooltip"
              data-placement="top"
              title="Load next 5 pages"
              className="page-link carret "
              href="#"
            >
              ...
            </a>
          </li>
          <li className={`page-item ${currentPage === pages && "active"}`}>
            <a
              onClick={() => handleChangePage(pages)}
              className="page-link"
              href="#"
            >
              {pages}
            </a>
          </li>
        </>
      ) : (
        <>
          {loadFivePages(showNextPages, currentPage)}
          <li className="page-item">
            <a
              onClick={() => handleShowPage("forward")}
              data-toggle="tooltip"
              data-placement="top"
              title="Load next 5 pages"
              className="page-link carret "
              href="#"
            >
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {pages}
            </a>
          </li>
        </>
      )}

      <li className="page-item">
        <a
          onClick={() => handleChangePage(currentPage + 1)}
          className="page-link"
          href="#"
        >
          »
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
