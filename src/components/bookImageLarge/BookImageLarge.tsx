import React from "react";
import "./BookImageLarge.css";
import { useBookItemUseContext } from "../../contexts/bookCollectionContext";
function BookImageLarge(): JSX.Element {
  const currentBook = useBookItemUseContext()
  console.log(currentBook)
  return (
    <div className="book-preview-image">
      <img src={`${currentBook.imageURL}`} alt={`${currentBook.bookName}`} />
    </div>
  );
}

export default BookImageLarge;
