import { useState, useEffect, useMemo } from "react";
import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";
import { useParams } from "react-router-dom";
import { bookItemInitialValue } from "../../contexts/initialValues";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
import { BookCollectionContextInterface } from "../../types/BookCollectionContextInterface";
export default function useBookChange(): BookItemContextInterface {
  let { currentBookID } = useParams();
  const [bookToBeDisplayed, SetBookToBeDisplayed] =
    useState(bookItemInitialValue);
    const bookCollections: BookCollectionContextInterface = useBookCollectionUseContext();
    const newBookColleciton = useMemo(() => [...bookCollections.BooksInfo], [bookCollections]);
    if (localStorage.getItem('bookCollection')){
      newBookColleciton.push(...JSON.parse(localStorage.getItem('bookCollection') ?? ''))
    }

  currentBookID = currentBookID && currentBookID.split("-")[0];

  useEffect(() => {
    for (let i = 0; i < newBookColleciton.length; i++) {
      const currentBook = newBookColleciton[i];
      if (currentBook["bookID"] === currentBookID) {
        SetBookToBeDisplayed(currentBook);
        window.scrollTo(0, 0);
      }
    }
  }, [currentBookID, newBookColleciton]);
  return bookToBeDisplayed;
}
