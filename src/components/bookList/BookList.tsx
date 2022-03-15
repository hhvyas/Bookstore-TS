import React from "react";
import "./BookList.css";
import BookItem from "../bookItem/BookItem";

import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";

type PropBookList = {
  booksToBeRendered: BookItemContextInterface[];
};

function BookList(props: PropBookList) {
  const { booksToBeRendered } = props;
  return (
    <div className="book-list">
      {booksToBeRendered.map((bookDisplayInfo) => (
        <BookItem
          bookDisplayInfo={bookDisplayInfo}
          key={`${bookDisplayInfo.bookID}`}
        />
      ))}
    </div>
  );
}

export default BookList;
