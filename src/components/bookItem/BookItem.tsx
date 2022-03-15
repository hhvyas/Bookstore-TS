import React from "react";
import "./BookItem.css";
import { FcLike } from "react-icons/fc";

import { Link } from "react-router-dom";

import {
  BookItemContextInterface,
} from "../../types/BookCollectionContextInterface";

type BookItemProp = {
  bookDisplayInfo: BookItemContextInterface;
};

function BookItem(props: BookItemProp) {
  const { bookDisplayInfo } = props;
  return (
    <>
      {bookDisplayInfo && (
        <>
          <Link
            to={`/book/${
              bookDisplayInfo.bookID
            }-${bookDisplayInfo.bookName.split(" ").join("-").toLowerCase()}`}
            className="book-item-link"
          >
            <div className="book-item" key={bookDisplayInfo.bookID}>
              <img
                src={`${bookDisplayInfo.imageURL}`}
                className="book-item-image"
                alt={`${bookDisplayInfo.bookName}`}
              />
              <div className="book-item-name">
                <p>{bookDisplayInfo.bookName}</p>
              </div>
              <div className="book-item-author">
                <p>By {bookDisplayInfo.author}</p>
              </div>
              <div className="book-item-genre">
                <p>{bookDisplayInfo.genre}</p>
              </div>
              <div className="book-item-likes">
                <FcLike style={{ marginRight: "5px", cursor: "pointer" }} />
                {bookDisplayInfo.likes}
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default BookItem;
