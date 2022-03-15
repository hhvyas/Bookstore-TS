import React from "react";
import "./DescriptionContent.css";

import { useBookItemUseContext } from "../../../contexts/bookCollectionContext";
function DescriptionContent() {
  const currentBook = useBookItemUseContext();
  // console.log(book)
  return (
    <>
      {currentBook && (
        <>
          {currentBook && (
            <>
              <div className="book-description-content">
                <ul>
                  <li>
                    <strong>author</strong> - {currentBook.author}
                  </li>
                  <li>
                    <strong>publisher</strong> - {currentBook.publisher}
                  </li>
                  <li>
                    <strong>edition</strong> - {currentBook.edition}
                  </li>
                  <li>
                    <strong>binding</strong> - {currentBook.binding}
                  </li>
                  <li>
                    <strong>language</strong> - {currentBook.language}
                  </li>
                  <li>
                    <strong>pages</strong> - {currentBook.pages}
                  </li>
                  <li>
                    <strong>condition</strong> - {currentBook.condition}
                  </li>
                </ul>
              </div>
            </>
          )}
          <div className="book-summary">
            <h3>Summary</h3>
            <p>{currentBook.summary}</p>
          </div>
        </>
      )}
    </>
  );
}

export default DescriptionContent;
