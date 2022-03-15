import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import "./PriceAndCartReview.css";
import { useBookItemUseContext } from "../../contexts/bookCollectionContext";

type PriceAndCartReviewProps = {
  bookQuantity: number;
};

function PriceAndCartReview(props: PriceAndCartReviewProps) {
  const { bookQuantity } = props;
  const currentBook = useBookItemUseContext();
  const [review, setReview] = React.useState({
    like: false,
  });

  const handleLike = () => {
    if (review.like) {
      currentBook.likes = currentBook.likes - 1;
    } else {
      currentBook.likes = currentBook.likes + 1;
    }
    setReview({ like: !review.like });
  };
  return (
    <>
      {currentBook && (
        <>
          <div className="book-preview-price">
            <div className="price">
              <h3>Rs. {currentBook.price * bookQuantity}</h3>
            </div>
            <div className="add-to-cart">
              <button className="buy-now-button">
                <span>
                  <BsCart2 />
                  <span>Buy Now</span>
                </span>
              </button>
              <button className="add-to-cart-button">
                <span>
                  <BsCart2 />
                  <span>Add to Cart</span>
                </span>
              </button>
            </div>
          </div>

          <div className="review">
            <button onClick={handleLike} style={{ cursor: "auto" }}>
              {review.like ? (
                <FcLike style={{ cursor: "pointer" }} />
              ) : (
                <FcLikePlaceholder style={{ cursor: "pointer" }} />
              )}
            </button>
            {currentBook.likes}
          </div>
        </>
      )}
    </>
  );
}

export default PriceAndCartReview;
