import React from "react";
import PreviewHeader from "../previewHeader/PreviewHeader";
import "./BookDetails.css";
import useBookQuantity from "./useBookQuantity";
import QuantitySelection from "../quantitySelection/QuantitySelection";
import PriceAndCartReview from "../priceAndCartReview/PriceAndCartReview";

function BookDetails() {
  const { bookQuantity, handleQuantitiyDecrease, handleQuantitiyIncrease } =
    useBookQuantity();
  return (
    <div className="book-preview-details">
      <PreviewHeader />
      <QuantitySelection
        handleQuantitiyDecrease={handleQuantitiyDecrease}
        handleQuantitiyIncrease={handleQuantitiyIncrease}
        bookQuantity={bookQuantity}
      />
      <div className="horizontal-line"></div>
      <PriceAndCartReview bookQuantity={bookQuantity} />
    </div>
  );
}

export default BookDetails;
