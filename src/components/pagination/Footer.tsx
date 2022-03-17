import React from "react";
import "./Pagination.css";
import { FooterPagination } from "../../types/FooterInterface";

function Footer(props: FooterPagination): JSX.Element {
  const { paginationCount, handlePageChange, currentActivePage } = props;

  return (
    <div className="pagination">
      <div className="pagination-buttons">
        <div className="pagination-buttons-previous">
          <button
            id={`${currentActivePage === 1 ? "disabledButton" : ""}`}
            onClick={() => handlePageChange(currentActivePage - 1)}
            disabled={currentActivePage === 1}
          >
            &lt; Prev
          </button>
        </div>
        <div className={`pagination-buttons-pages`}>
          {paginationCount.map((page) => (
            <button
              id={`${currentActivePage === page ? "activePaginationPage" : ""}`}
              key={page}
              onClick={() => {
                handlePageChange(page)
              }}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="pagination-buttons-next">
          <button
            id={`${
              currentActivePage === paginationCount.length
                ? "disabledButton"
                : ""
            }`}
            onClick={() => handlePageChange(currentActivePage + 1)}
            disabled={currentActivePage === paginationCount.length}
            className={currentActivePage === paginationCount.length ? 'showToolTip' : ''}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
