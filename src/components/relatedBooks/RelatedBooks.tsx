import React from "react";
import BookItem from "../bookItem/BookItem";
import "./RelatedBooks.css";
import useRelatedBook from "./hooks/useRelatedBook";

function RelatedBooks(): JSX.Element {
  const relatedBooks = useRelatedBook();
  return (
    <div className="related-books">
      <h3>Related Books</h3>
      <div className="related-books-list">
        {relatedBooks.map((bookItem) => (
          <BookItem bookDisplayInfo={bookItem} key={bookItem.bookID} />
        ))}
      </div>
    </div>
  );
}

export default RelatedBooks;
