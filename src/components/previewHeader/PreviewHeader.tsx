import React from "react";
import "./PreviewHeader.css";
import { useBookItemUseContext } from "../../contexts/bookCollectionContext";

function PreviewHeader() {

  const currentBook = useBookItemUseContext();

  return (
    <>
      {currentBook && (
        <>
          <h1>{currentBook.bookName}</h1>
          <div className="book-preview-matadata">
            <p>Book ID:- {currentBook.bookID}</p>
            <p style={{ color: `${currentBook.quantitiyLeft ? "green" : "red"}` }}>
              {currentBook.quantitiyLeft ? "Available" : "Sold Out"}
            </p>
            <p>Sold by:- {currentBook.publisher}</p>
          </div>
        </>
      )}
    </>
  );
}

export default PreviewHeader;
