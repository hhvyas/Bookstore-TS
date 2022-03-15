import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookItemUseContext } from "../../contexts/bookCollectionContext";

export default function useBookQuantity() {
  const currentBook = useBookItemUseContext();
  const currentBookID = useParams()
  const [bookQuantity, setBookQuantity] = React.useState(1);
  useEffect(() => {
    return () => {
      setBookQuantity(1);
    }
  }, [currentBookID]);
  
  const handleQuantitiyDecrease = React.useCallback((): void => {
    if (bookQuantity <= 1) {
      return;
    }
    setBookQuantity((prevState) => prevState - 1);
  }, [bookQuantity]);
  const handleQuantitiyIncrease = React.useCallback((): void => {
    if (currentBook.quantitiyLeft < bookQuantity) {
      return;
    }
    setBookQuantity((prevState) => prevState + 1);
  }, [bookQuantity, currentBook]);

  return {
    bookQuantity,
    handleQuantitiyDecrease,
    handleQuantitiyIncrease,
  };
}
