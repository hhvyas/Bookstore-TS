import React from "react";
// import BookDetails from './BookDetails'
import BookImageLarge from "../bookImageLarge/BookImageLarge";
import BookDetails from "../bookDetails/BookDetails";
import "./BookPreview.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
function BookPreview(): JSX.Element {
  return (
    <>
      <Link to="/" className="back-button-link">
        <IoIosArrowBack className="back-button-icon" />
      </Link>
      <div className="book-preview">
        <BookImageLarge />
        <BookDetails  />
      </div>
    </>
  );
}

export default BookPreview;
