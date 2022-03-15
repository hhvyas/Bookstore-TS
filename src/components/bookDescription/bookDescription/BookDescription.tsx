import React from "react";
import DescriptionContent from "../bookDescriptionContent/DescriptionContent";
import DescriptionNav from '../bookDescriptionNav/BookDescriptionNav'
import './BookDescription.css'

function BookDescription(): JSX.Element {
  return (
    <div className="book-description">
      <DescriptionNav />
      <DescriptionContent />
    </div>
  );
}

export default BookDescription;
