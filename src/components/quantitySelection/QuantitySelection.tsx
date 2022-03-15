import React from "react";
import "./QuantitySelection.css";
import { useBookItemUseContext } from "../../contexts/bookCollectionContext";

type QuantitySelectionProps = {
  handleQuantitiyDecrease: () => void,
  handleQuantitiyIncrease: () => void,
  bookQuantity: number
}

function QuantitySelection(props: QuantitySelectionProps) {
  const  { handleQuantitiyDecrease, handleQuantitiyIncrease, bookQuantity } = props;
  const currentBook = useBookItemUseContext();
  function DecrementButtonDisableconditions(){
    return (!currentBook.quantitiyLeft || bookQuantity === 1)
  }
  function IncrementButtonDisableconditions(){
    return (!currentBook.quantitiyLeft || currentBook.quantitiyLeft <= bookQuantity || bookQuantity >= 50)
  }
  return (
    <>
      {currentBook && (
        <>
          <div className="quantity-selection">
            <div className="quantity-selection-quantitiy">
              <p>QTY</p>
            </div>
            <div className="quantity-selection-buttons">
              <button
                onClick={handleQuantitiyDecrease}
                disabled={!currentBook.quantitiyLeft || bookQuantity === 1}
                id={`${DecrementButtonDisableconditions() ? 'button-disabled' : ''}`}
              >
                -
              </button>
              <p>{bookQuantity}</p>
              <button
                onClick={handleQuantitiyIncrease}
                disabled={!currentBook.quantitiyLeft || currentBook.quantitiyLeft <= bookQuantity || bookQuantity >= 50}
                id={`${IncrementButtonDisableconditions() ? 'button-disabled' : ''}`}
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default QuantitySelection;
